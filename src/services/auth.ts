import { supabase } from '../app/lib/supabase';

// Helper to fetch current logged in user from Supabase Auth
export const getCurrentUser = async () => {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error || !session) return null;
  return session.user;
};

// Helper to fetch user role
export const getUserRole = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_roles')
    .select('role')
    .eq('id', userId)
    .single();
  
  if (error || !data) return null;
  return data.role;
};

// Helper to fetch Seller's active store
export const getSellerStore = async (sellerId: string) => {
  const { data, error } = await supabase
    .from('shops')
    .select('*')
    .eq('seller_id', sellerId)
    .single();
  
  if (error || !data) return null;
  return data;
};
