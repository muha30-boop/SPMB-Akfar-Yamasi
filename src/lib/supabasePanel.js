import supabase from './supabaseClient';

// ---------------------------------------------------------------------------
// Registration operations
// ---------------------------------------------------------------------------

export const fetchRegistrations = async (options = {}) => {
  const {
    filters = {},
    search = '',
    page = 0,
    pageSize = 50,
    sortBy = 'created_at',
    ascending = false,
  } = options;

  let query = supabase
    .from('registrations')
    .select('*', { count: 'exact' });

  if (search) {
    const escaped = search.replace(/%/g, '\\%').replace(/_/g, '\\_');
    query = query.or(
      `full_name.ilike.%${escaped}%,nik.ilike.%${escaped}%,registration_number.ilike.%${escaped}%`,
      { foreignTables: [] }
    );
  }

  if (filters.route) {
    query = query.eq('route', filters.route);
  }
  if (filters.payment_status) {
    query = query.eq('payment_status', filters.payment_status);
  }
  if (filters.document_status) {
    query = query.eq('document_status', filters.document_status);
  }
  if (filters.admission_status) {
    query = query.eq('admission_status', filters.admission_status);
  }
  if (filters.route === 'rpl') {
    query = query.eq('route', 'rpl');
  }

  query = query
    .order(sortBy, { ascending })
    .range(page * pageSize, (page + 1) * pageSize - 1);

  const { data, error, count } = await query;
  return {
    data: data || [],
    error,
    count: count || 0,
  };
};

export const fetchRegistrationById = async (id) => {
  const { data, error } = await supabase
    .from('registrations')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
};

export const fetchRegistrationsByAuthUserId = async (authUserId) => {
  const { data, error } = await supabase
    .from('registrations')
    .select('*')
    .eq('auth_user_id', authUserId)
    .order('created_at', { ascending: false });
  return { data: data || [], error };
};

export const fetchRegistrationsByEmail = async (email) => {
  const { data, error } = await supabase
    .from('registrations')
    .select('*')
    .eq('email', email)
    .order('created_at', { ascending: false });
  return { data: data || [], error };
};

export const updateRegistration = async (id, updates) => {
  const { data, error } = await supabase
    .from('registrations')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

export const updatePaymentStatus = async (id, status, method = null) => {
  const updates = { payment_status: status };
  if (method) updates.payment_method = method;
  if (status === 'paid') updates.payment_paid_at = new Date().toISOString();
  return updateRegistration(id, updates);
};

export const updateDocumentStatus = async (id, status, remarks = null) => {
  const updates = { document_status: status };
  if (remarks) updates.document_remarks = remarks;
  return updateRegistration(id, updates);
};

export const updateAdmissionStatus = async (id, status, notes = null) => {
  const updates = { admission_status: status };
  if (notes) updates.notes = notes;
  return updateRegistration(id, updates);
};

export const assignNIM = async (registrationId) => {
  const { data, error } = await supabase.rpc('create_nim_from_registration', {
    p_reg_id: registrationId,
  });
  return { data, error };
};

export const assignClass = async (registrationId, classAssignment, advisor) => {
  return updateRegistration(registrationId, {
    class_assignment: classAssignment,
    academic_advisor: advisor,
  });
};

export const assignExam = async (registrationId, schedule, room, time) => {
  return updateRegistration(registrationId, {
    exam_schedule: schedule,
    exam_room: room,
    exam_time: time,
    exam_status: 'scheduled',
  });
};

export const uploadDocument = async (file, pathPrefix) => {
  if (!file) return null;
  const fileName = `${pathPrefix}_${Date.now()}_${file.name}`;
  const { error } = await supabase.storage
    .from('spmb-documents')
    .upload(fileName, file);
  if (error) throw error;
  const { data: { publicUrl } } = supabase.storage
    .from('spmb-documents')
    .getPublicUrl(fileName);
  return publicUrl;
};

export const subscribeToRegistrations = (callback) => {
  return supabase
    .channel('registrations-changes')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'registrations' },
      (payload) => callback(payload)
    )
    .subscribe();
};

// ---------------------------------------------------------------------------
// Panel configuration operations
// ---------------------------------------------------------------------------

export const fetchPanelSettings = async () => {
  const { data, error } = await supabase.from('panel_settings').select('*');
  if (error) return { data: {}, error };
  const settings = (data || []).reduce((acc, s) => {
    acc[s.key] = s.value;
    return acc;
  }, {});
  return { data: settings, error };
};

export const updatePanelSetting = async (key, value) => {
  const { data, error } = await supabase
    .from('panel_settings')
    .update({ value })
    .eq('key', key)
    .select()
    .single();
  return { data, error };
};

export const upsertPanelSetting = async (key, value, description = null) => {
  const { data, error } = await supabase
    .from('panel_settings')
    .upsert({ key, value, description })
    .select()
    .single();
  return { data, error };
};

export const fetchPanelStaff = async () => {
  const { data, error } = await supabase
    .from('panel_staff')
    .select('*')
    .eq('is_active', true)
    .order('display_order');
  return { data: data || [], error };
};

export const updatePanelStaff = async (id, updates) => {
  const { data, error } = await supabase
    .from('panel_staff')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

export const fetchPanelMenu = async () => {
  const { data, error } = await supabase
    .from('panel_menu_items')
    .select('*')
    .eq('is_active', true)
    .order('display_order');
  return { data: data || [], error };
};

export const updateMenuItem = async (id, updates) => {
  const { data, error } = await supabase
    .from('panel_menu_items')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

// ---------------------------------------------------------------------------
// Recruitment waves operations
// ---------------------------------------------------------------------------

export const fetchRecruitmentWaves = async () => {
  const { data, error } = await supabase
    .from('recruitment_waves')
    .select('*')
    .order('start_date', { ascending: false });
  return { data: data || [], error };
};

export const createRecruitmentWave = async (wave) => {
  const { data, error } = await supabase
    .from('recruitment_waves')
    .insert(wave)
    .select()
    .single();
  return { data, error };
};

export const updateRecruitmentWave = async (id, updates) => {
  const { data, error } = await supabase
    .from('recruitment_waves')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

export const deleteRecruitmentWave = async (id) => {
  const { error } = await supabase.from('recruitment_waves').delete().eq('id', id);
  return { error };
};

// ---------------------------------------------------------------------------
// Activity feed operations
// ---------------------------------------------------------------------------

export const fetchActivities = async (limit = 50) => {
  const { data, error } = await supabase
    .from('panel_activities')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);
  return { data: data || [], error };
};

export const addActivity = async (type, title, description = null, createdBy = null) => {
  const { data, error } = await supabase.from('panel_activities').insert({
    type,
    title,
    description,
    created_by: createdBy,
  }).select().single();
  return { data, error };
};

export const markActivityRead = async (id) => {
  const { data, error } = await supabase
    .from('panel_activities')
    .update({ is_read: true })
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

export const markAllActivitiesRead = async () => {
  const { data, error } = await supabase
    .from('panel_activities')
    .update({ is_read: true })
    .eq('is_read', false);
  return { data, error };
};

// ---------------------------------------------------------------------------
// School masters operations
// ---------------------------------------------------------------------------

export const fetchSchools = async (search = '') => {
  let query = supabase
    .from('school_masters')
    .select('*')
    .eq('is_active', true);

  if (search) {
    query = query.ilike('name', `%${search}%`);
  }

  const { data, error } = await query.order('name').limit(50);
  return { data: data || [], error };
};

// ---------------------------------------------------------------------------
// Bulk operations
// ---------------------------------------------------------------------------

export const bulkUpdateStatus = async (ids, field, value) => {
  const { data, error } = await supabase
    .from('registrations')
    .update({ [field]: value, updated_at: new Date().toISOString() })
    .in('id', ids)
    .select();
  return { data, error };
};

export const generateNIMBatch = async (registrationIds) => {
  const results = [];
  for (const id of registrationIds) {
    const { data, error } = await supabase.rpc('create_nim_from_registration', {
      p_reg_id: id,
    });
    if (error) {
      results.push({ id, error: error.message });
    } else {
      results.push({ id, nim: data });
    }
  }
  return results;
};
