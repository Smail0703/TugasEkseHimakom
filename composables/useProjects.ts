// composables/useProjects.ts
import type { Assignment, Project } from '~/types/project'

export const useProjects = () => {
  const assignments = useState<Assignment[]>('assignments', () => [
    {
      id: '2',
      title: 'Penugasan 2: Pembuatan Term of Reference (TOR)',
      purpose: 'Menyusun kerangka acuan kerja formal untuk kegiatan kemahasiswaan dengan pedoman tata bahasa yang baku (KBBI dan EYD).',
      result: 'Dokumen TOR yang terstruktur rapi untuk mendukung pengajuan proposal kegiatan.'
    },
    {
      id: '3',
      title: 'Penugasan 3: Infografis Dampak AI',
      purpose: 'Menganalisis dan memvisualisasikan disrupsi kecerdasan buatan terhadap pekerjaan level junior di industri teknologi.',
      result: 'Poster infografis informatif yang menyoroti pergeseran tren kerja dan adaptasi skill.'
    },
    {
      id: '4',
      title: 'Penugasan 4: Implementasi Algoritma Dasar',
      purpose: 'Menerapkan konsep pointer dan manajemen memori dasar menggunakan bahasa C/C++.',
      result: 'Program berjalan efisien dengan alokasi memori yang tepat tanpa memory leak.'
    }
  ])

  const projects = useState<Project[]>('projects', () => [
    {
      id: 'p1',
      title: 'Panitia E-sport ',
      role: 'Divisi Lomba',
      description: 'Berpengalaman sebagai Operator Lomba Mobile Legends, bertanggung jawab atas kelancaran teknis dan operasional turnamen. Fokus utama saya adalah memastikan kepatuhan terhadap regulasi pertandingan',
      techStack: ['scrcpy']
    },
    {
      id: 'p2',
      title: 'LKMM-TH JTK Polban',
      role: 'Peserta',
      description: 'Mengikuti LKMM-TH untuk latihan dasar kepemimpinan dikawasan Himpunan',
      techStack: ['Peserta']
    }
  ])

  return { assignments, projects }
}