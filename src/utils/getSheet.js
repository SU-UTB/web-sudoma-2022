import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nvjlwxngnzebpokgtfpi.supabase.co';
const supabase = createClient(supabaseUrl, import.meta.env.VITE_SUPABASE_KEY);

export const getData = async () => {
  const { data: guests, error } = await supabase.from('guests').select('*');
  if (error) {
    console.log(`Error trying to load a guest table: ${error}`);
    return;
  }
  return { guests };
};

export const addGuest = async (
  name,
  nickname,
  email,
  president,
  favoriteProject,
  inviteFrom
) => {
  const { data, error } = await supabase.from('guests').insert([
    {
      name: name,
      nickname: nickname,
      email: email,
      president: president,
      favorite_project: favoriteProject,
      invite_from: inviteFrom,
    },
  ]);
  return { data, error };
};
