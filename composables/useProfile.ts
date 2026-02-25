// composables/useProfile.ts
import type { Profile } from '~/types/profile'

export const useProfile = () => {
  const profile = useState<Profile>('profile', () => ({
    name: 'Ismail Basyir Muthahhar',
    role: 'Mahasiswa Tahun Pertama',
    institution: 'Jurusan Teknik Komputer dan Informatika, Politeknik Negeri Bandung',
    bio: 'Saya adalah mahasiswa Teknik Komputer dan Informatika yang memiliki antusiasme tinggi dalam pengembangan perangkat lunak. Fokus saya saat ini adalah mengexplore hal-hal yang sekiranya menarik untuk saya, sembari terus mengasah kemampuan manajemen organisasi melalui kegiatan kemahasiswaan khususnya Himpunan.',
    skills: ['C/C++', 'Python', 'Git'],
    interests: ['Web Development', 'CTF', 'Organizational Management', 'Advanced Mathematics','Public Speaking'],
    contacts: {
      email: 'ismail.basyir.tif425@polban.ac.id',
      linkedin: 'linkedin.com/in/ismail-b-m-undefined-88268739a',
      github: 'https://github.com/Smail0703'
    }
  }))

  return { profile }
}