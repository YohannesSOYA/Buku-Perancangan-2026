const schoolData = {
  info: {
    name: "SMK Sacred Heart",
    slogan: "Cemerlang, Gemilang, Terbilang",
    vision: "Pendidikan Berkualiti, Insan Terdidik, Negara Sejahtera",
    mission: "Melestarikan Sistem Pendidikan Yang Berkualiti Untuk Membangunkan Potensi Individu Bagi Memenuhi Aspirasi Negara",
    principalMessage: `Selamat Sejahtera dan Salam Sehati Sejiwa kepada semua warga pendidik dan Anggota Kumpulan Pelaksana (AKP) SMK Sacred Heart.
    
    Tahun 2026 membawa lembaran baharu untuk kita memperkukuhkan komitmen kita dalam melahirkan modal insan yang seimbang dari segi jasmani, emosi, rohani, dan intelek. Melalui Buku Perancangan Pengurusan ini, saya berharap semua guru dapat menyelaraskan usaha bagi mencapai Indikator Prestasi Utama (KPI) sekolah terutamanya dalam aspek peningkatan PBD, kehadiran murid melebihi 95%, serta kecemerlangan sukan dan kokurikulum.
    
    Mari kita bekerja sebagai satu pasukan ("Together We Achieve More") untuk meletakkan sekolah kita di mercu kejayaan yang lebih gemilang. Selamat bertugas dan selamat merancang!`
  },
  announcements: [
    {
      id: 1,
      date: "2026-06-22",
      title: "Penghantaran RPH Minggu 15",
      content: "Semua guru diminta menghantar RPH untuk semakan pentadbir sebelum jam 12:00 tengah hari pada hari Jumaat.",
      category: "Kurikulum",
      urgent: true
    },
    {
      id: 2,
      date: "2026-06-20",
      title: "Mesyuarat Guru Bil 3/2026",
      content: "Mesyuarat Guru Bil 3 akan diadakan pada 30 Jun 2026 (Selasa) di Bilik Persidangan Utama jam 2:30 petang.",
      category: "Pentadbiran",
      urgent: false
    },
    {
      id: 3,
      date: "2026-06-18",
      title: "Kutipan Derma Kebajikan Murid",
      content: "Mohon guru kelas mengemaskini senarai murid yang layak menerima bantuan awal persekolahan fasa kedua.",
      category: "HEM",
      urgent: false
    }
  ],


  calendar: [
    // JANUARI 2026
    { date: "2026-01-06", dayDisplay: "06", monthDisplay: "Jan", year: "2026", title: "Mesyuarat Pengurusan & Pentadbiran Tertinggi", category: "Pentadbiran", time: "08:30 AM", venue: "Bilik Mesyuarat Utama", ic: "Pengetua" },
    { date: "2026-01-07", dayDisplay: "07", monthDisplay: "Jan", year: "2026", title: "Mesyuarat Staf, Kurikulum, HEM, KO-K & T.6 Bil. 1 / 2026", category: "Pentadbiran", time: "08:30 AM", venue: "Dewan Seri Bintang", ic: "Pengetua" },
    { date: "2026-01-09", dayDisplay: "09", monthDisplay: "Jan", year: "2026", title: "Hari Pra Persekolahan Sesi Persekolahan 2026", category: "Pentadbiran", time: "08:00 AM", venue: "Kawasan Sekolah", ic: "PK Pentadbiran" },
    { date: "2026-01-10", dayDisplay: "10", monthDisplay: "Jan", year: "2026", title: "Khidmat Masyarakat Badan Beruniform 1 (Gotong Royong) – 3 Jam", category: "Kokurikulum", time: "08:00 AM", venue: "Kawasan Sekolah", ic: "S/U Kokurikulum" },
    { date: "2026-01-12", dayDisplay: "12", monthDisplay: "Jan", year: "2026", title: "Penggal 1 Sesi Persekolahan 2026 Bermula", category: "Pentadbiran", time: "07:30 AM", venue: "Dataran Perhimpunan", ic: "Semua Guru" },
    { date: "2026-01-13", dayDisplay: "13-16", monthDisplay: "Jan", year: "2026", title: "Mesyuarat Bidang Bil. 1", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Khas GKMP", ic: "Semua GKMP" },
    { date: "2026-01-13", dayDisplay: "13-16", monthDisplay: "Jan", year: "2026", title: "Tingkatan 6 - Mesyuarat Panitia dan Pengurusan Kerja Kursus T6 Bil. 1", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Mesyuarat T6", ic: "Penyelaras T6" },
    { date: "2026-01-14", dayDisplay: "14", monthDisplay: "Jan", year: "2026", title: "Mesyuarat JK Disiplin Murid Bil. 1", category: "HEM", time: "02:30 PM", venue: "Bilik Disiplin", ic: "Ketua Guru Disiplin" },
    { date: "2026-01-14", dayDisplay: "14", monthDisplay: "Jan", year: "2026", title: "Orientasi Tingkatan 4", category: "HEM", time: "08:00 AM", venue: "Dewan Seri Bintang", ic: "Penyelaras Tingkatan 4" },
    { date: "2026-01-15", dayDisplay: "15", monthDisplay: "Jan", year: "2026", title: "Mesyuarat JK HEM Bil. 1", category: "HEM", time: "02:30 PM", venue: "Bilik Mesyuarat Anggerik", ic: "PK HEM" },
    { date: "2026-01-15", dayDisplay: "15-16", monthDisplay: "Jan", year: "2026", title: "Orientasi Murid Baharu Peralihan & Tingkatan 1", category: "HEM", time: "08:00 AM", venue: "Dewan Seri Bintang", ic: "Unit UBK" },
    { date: "2026-01-16", dayDisplay: "16", monthDisplay: "Jan", year: "2026", title: "Tingkatan 6 – Majlis Restu Ilmu & Taklimat Peperiksaan STPM 2025", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Kuliah T6", ic: "Penyelaras T6" },
    { date: "2026-01-19", dayDisplay: "19", monthDisplay: "Jan", year: "2026", title: "Tingkatan 6 – Majlis Restu Ilmu & Taklimat Peperiksaan STPM 2026", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Kuliah T6", ic: "Penyelaras T6" },
    { date: "2026-01-19", dayDisplay: "19-23", monthDisplay: "Jan", year: "2026", title: "Mesyuarat Panitia Bil. 1", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Panitia", ic: "Ketua Panitia" },
    { date: "2026-01-20", dayDisplay: "20-27", monthDisplay: "Jan", year: "2026", title: "Tingkatan 6 - Peperiksaan STPM 2025 Semester 3 (S3)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM" },
    { date: "2026-01-21", dayDisplay: "21-28", monthDisplay: "Jan", year: "2026", title: "Tingkatan 6 - Peperiksaan STPM 2026 Semester 1 (S1)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM" },
    { date: "2026-01-29", dayDisplay: "29", monthDisplay: "Jan", year: "2026", title: "Tingkatan 6 – Taklimat Persediaan Semester 2 Kohort STPM 2026", category: "Kurikulum", time: "10:30 AM", venue: "Dewan Kuliah T6", ic: "Penyelaras T6" },
    { date: "2026-01-30", dayDisplay: "30", monthDisplay: "Jan", year: "2026", title: "Hantar SKT / Rancangan Tahunan KK/Sukan", category: "Kokurikulum", time: "12:00 PM", venue: "Bilik PK Kokurikulum", ic: "Semua Guru Penasihat" },

    // FEBRUARI 2026
    { date: "2026-02-03", dayDisplay: "03-10", monthDisplay: "Feb", year: "2026", title: "Tingkatan 6 - Peperiksaan STPM 2025 Ulangan Semester 1 (U1)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM" },
    { date: "2026-02-09", dayDisplay: "09", monthDisplay: "Feb", year: "2026", title: "Pendaftaran KK/Sukan Oleh Guru Tingkatan Aliran Perdana", category: "Kokurikulum", time: "07:30 AM", venue: "Kelas", ic: "Guru Tingkatan" },
    { date: "2026-02-12", dayDisplay: "12", monthDisplay: "Feb", year: "2026", title: "Tingkatan 6 - Peperiksaan STPM 2025 Ulangan Semester 2 (U2)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM" },
    { date: "2026-02-16", dayDisplay: "16-20", monthDisplay: "Feb", year: "2026", title: "Cuti Tahun Baru Cina", category: "Pentadbiran", time: "Cuti Am", venue: "-", ic: "KPM" },
    { date: "2026-02-23", dayDisplay: "23-26", monthDisplay: "Feb", year: "2026", title: "Tingkatan 6 - Peperiksaan STPM 2025 Ulangan Semester 2 (U2) (Fasa 2)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM" },
    { date: "2026-02-25", dayDisplay: "25", monthDisplay: "Feb", year: "2026", title: "Kuiz Dalam Talian Badan Beruniform", category: "Kokurikulum", time: "02:30 PM", venue: "Atas Talian", ic: "S/U Kokurikulum" },

    // MAC 2026
    { date: "2026-03-05", dayDisplay: "05-18", monthDisplay: "Mac", year: "2026", title: "Penilaian Sekolah 1", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Darjah", ic: "S/U Peperiksaan" },
    { date: "2026-03-09", dayDisplay: "09", monthDisplay: "Mac", year: "2026", title: "Tingkatan 6 – Pendaftaran Ujian MUET Sesi 2 Tahun 2026 Buka", category: "Kurikulum", time: "08:00 AM", venue: "Pejabat Am", ic: "Setiausaha MUET" },
    { date: "2026-03-19", dayDisplay: "19-20", monthDisplay: "Mac", year: "2026", title: "Cuti Tambahan KPM (Hari Raya Aidilfitri)", category: "Pentadbiran", time: "Cuti Am", venue: "-", ic: "KPM" },
    { date: "2026-03-21", dayDisplay: "21-29", monthDisplay: "Mac", year: "2026", title: "Cuti Penggal 1 Tahun 2026", category: "Pentadbiran", time: "Cuti Sekolah", venue: "-", ic: "KPM" },
    { date: "2026-03-30", dayDisplay: "30-02", monthDisplay: "Mac/Apr", year: "2026", title: "Tingkatan 6 – Ujian Sekolah Semester 2 (USS2)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM" },
    { date: "2026-03-31", dayDisplay: "31", monthDisplay: "Mac", year: "2026", title: "Tingkatan 6 – Semakan Keputusan STPM 2026 Semester 1", category: "Kurikulum", time: "10:00 AM", venue: "Online", ic: "MPM" },
    { date: "2026-03-31", dayDisplay: "31", monthDisplay: "Mac", year: "2026", title: "Mesyuarat JK Disiplin Murid Bil. 2", category: "HEM", time: "02:30 PM", venue: "Bilik Disiplin", ic: "Ketua Guru Disiplin" },

    // APRIL 2026
    { date: "2026-04-01", dayDisplay: "01", monthDisplay: "Apr", year: "2026", title: "Mesyuarat JK HEM Bil. 2", category: "HEM", time: "02:30 PM", venue: "Bilik Mesyuarat Anggerik", ic: "PK HEM" },
    { date: "2026-04-03", dayDisplay: "03", monthDisplay: "Apr", year: "2026", title: "Cuti Umum Sarawak : Good Friday", category: "Pentadbiran", time: "Cuti Am", venue: "-", ic: "Kerajaan Negeri" },
    { date: "2026-04-05", dayDisplay: "05", monthDisplay: "Apr", year: "2026", title: "Qing Ming", category: "Pentadbiran", time: "Hari Perayaan", venue: "-", ic: "-" },
    { date: "2026-04-06", dayDisplay: "06", monthDisplay: "Apr", year: "2026", title: "Cuti Peristiwa : Easter Monday", category: "Pentadbiran", time: "Cuti Peristiwa", venue: "-", ic: "Pengetua" },
    { date: "2026-04-07", dayDisplay: "07", monthDisplay: "Apr", year: "2026", title: "Dialog Prestasi Menengah Atas Bil. 1", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Mesyuarat", ic: "PK Pentadbiran" },
    { date: "2026-04-07", dayDisplay: "07", monthDisplay: "Apr", year: "2026", title: "Karnival Bahasa Melayu, Bahasa Inggeris & Bahasa Cina", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Seri Bintang", ic: "GKMP Bahasa" },
    { date: "2026-04-09", dayDisplay: "09", monthDisplay: "Apr", year: "2026", title: "Dialog Prestasi Menengah Rendah Bil. 1", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Mesyuarat", ic: "PK Pentadbiran" },
    { date: "2026-04-11", dayDisplay: "11", monthDisplay: "Apr", year: "2026", title: "Permuafakatan 1", category: "Pentadbiran", time: "08:30 AM", venue: "Dewan Seri Bintang", ic: "UBK & PIBG" },
    { date: "2026-04-10", dayDisplay: "10-24", monthDisplay: "Apr", year: "2026", title: "Tingkatan 6 – School MUET Test 1 (Calon MUET Sesi 3)", category: "Kurikulum", time: "08:00 AM", venue: "Kelas T6", ic: "Guru MUET", dateDisplay: "10, 17, 24 April" },
    { date: "2026-04-14", dayDisplay: "14-22", monthDisplay: "Apr", year: "2026", title: "Tingkatan 6 – Ujian Bertutur MUET Sesi 1 Tahun 2026", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Ujian MUET", ic: "Setiausaha MUET" },
    { date: "2026-04-20", dayDisplay: "20", monthDisplay: "Apr", year: "2026", title: "Tingkatan 6 – Pendaftaran Ujian MUET Sesi 2 Tahun 2026 Tutup", category: "Kurikulum", time: "12:00 PM", venue: "Online", ic: "Setiausaha MUET" },
    { date: "2026-04-25", dayDisplay: "25", monthDisplay: "Apr", year: "2026", title: "Tingkatan 6 – Ujian Bertulis MUET Sesi 1 Tahun 2026", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha MUET" },

    // MEI 2026
    { date: "2026-05-01", dayDisplay: "01", monthDisplay: "Mei", year: "2026", title: "Cuti Umum : Hari Pekerja", category: "Pentadbiran", time: "Cuti Am", venue: "-", ic: "Kerajaan" },
    { date: "2026-05-04", dayDisplay: "04", monthDisplay: "Mei", year: "2026", title: "PdP Tingkatan 6 Semester 1 Kohort STPM 2027 Bermula", category: "Kurikulum", time: "07:30 AM", venue: "Kelas T6", ic: "Penyelaras T6" },
    { date: "2026-05-07", dayDisplay: "07", monthDisplay: "Mei", year: "2026", title: "Mesyuarat Staf, Kurikulum, HEM, KO-K & T.6 Bil. 2 / 2026", category: "Pentadbiran", time: "02:30 PM", venue: "Dewan Seri Bintang", ic: "Pengetua" },
    { date: "2026-05-11", dayDisplay: "11", monthDisplay: "Mei", year: "2026", title: "Kemaskini Rekod KK/Sukan & PAJSK 1", category: "Kokurikulum", time: "Sepanjang Hari", venue: "Online", ic: "Guru Penasihat" },
    { date: "2026-05-12", dayDisplay: "12", monthDisplay: "Mei", year: "2026", title: "Cuti Umum : Hari Wesak", category: "Pentadbiran", time: "Cuti Am", venue: "-", ic: "Kerajaan" },
    { date: "2026-05-13", dayDisplay: "13-22", monthDisplay: "Mei", year: "2026", title: "Penilaian Sekolah 2", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Darjah", ic: "S/U Peperiksaan" },
    { date: "2026-05-18", dayDisplay: "18", monthDisplay: "Mei", year: "2026", title: "Pemantauan Rekod KK/Sukan & PAJSK 1 Oleh PKKK & Penyelaras", category: "Kokurikulum", time: "Sepanjang Hari", venue: "Pejabat Kokurikulum", ic: "PK Kokurikulum" },
    { date: "2026-05-18", dayDisplay: "18-22", monthDisplay: "Mei", year: "2026", title: "Tingkatan 6 – Ujian Percubaan Semester 2 (UPS2)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM" },
    { date: "2026-05-13", dayDisplay: "13-15", monthDisplay: "Mei", year: "2026", title: "Mesyuarat Bidang Bil. 2", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Khas GKMP", ic: "Semua GKMP" },
    { date: "2026-05-19", dayDisplay: "19-22", monthDisplay: "Mei", year: "2026", title: "Mesyuarat Panitia Bil.2", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Panitia", ic: "Ketua Panitia" },
    { date: "2026-05-19", dayDisplay: "19-22", monthDisplay: "Mei", year: "2026", title: "Tingkatan 6 - Mesyuarat Panitia & Pengurusan Kerja Kursus T6 Bil. 2", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Mesyuarat T6", ic: "Penyelaras T6" },
    { date: "2026-05-23", dayDisplay: "23-07", monthDisplay: "Mei/Jun", year: "2026", title: "Cuti Pertengahan Tahun 2026", category: "Pentadbiran", time: "Cuti Sekolah", venue: "-", ic: "KPM", dateDisplay: "23 Mei - 07 Jun" },

    // JUN 2026
    { date: "2026-06-06", dayDisplay: "06", monthDisplay: "Jun", year: "2026", title: "Khidmat Masyarakat Badan Beruniform 2 (Gotong Royong) – 3 Jam", category: "Kokurikulum", time: "08:00 AM", venue: "Kawasan Sekolah", ic: "S/U Kokurikulum" },
    { date: "2026-06-08", dayDisplay: "08", monthDisplay: "Jun", year: "2026", title: "Penggal 2 Sesi Persekolahan 2026 Bermula", category: "Pentadbiran", time: "07:30 AM", venue: "Dataran Perhimpunan", ic: "Semua Guru" },
    { date: "2026-06-15", dayDisplay: "15-25", monthDisplay: "Jun", year: "2026", title: "Tingkatan 6 – Ujian Bertutur MUET Sesi 2 Tahun 2026", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Ujian MUET", ic: "Setiausaha MUET" },
    { date: "2026-06-16", dayDisplay: "16", monthDisplay: "Jun", year: "2026", title: "Dialog Prestasi Menengah Atas Bil. 2", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Mesyuarat", ic: "PK Pentadbiran" },
    { date: "2026-06-17", dayDisplay: "17", monthDisplay: "Jun", year: "2026", title: "Cuti Umum : Awal Muharram", category: "Pentadbiran", time: "Cuti Am", venue: "-", ic: "Kerajaan" },
    { date: "2026-06-18", dayDisplay: "18", monthDisplay: "Jun", year: "2026", title: "Dialog Prestasi Menengah Rendah Bil. 2", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Mesyuarat", ic: "PK Pentadbiran" },
    { date: "2026-06-20", dayDisplay: "20", monthDisplay: "Jun", year: "2026", title: "Permuafakatan 2", category: "Pentadbiran", time: "08:30 AM", venue: "Dewan Seri Bintang", ic: "UBK & PIBG" },
    { date: "2026-06-24", dayDisplay: "24", monthDisplay: "Jun", year: "2026", title: "Kuiz Dalam Talian Kelab & Persatuan", category: "Kokurikulum", time: "02:30 PM", venue: "Atas Talian", ic: "Penyelaras Kelab" },
    { date: "2026-06-27", dayDisplay: "27", monthDisplay: "Jun", year: "2026", title: "Tingkatan 6 – Ujian Bertulis MUET Sesi 2 Tahun 2026", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha MUET" },
    { date: "2026-06-29", dayDisplay: "29-06", monthDisplay: "Jun/Jul", year: "2026", title: "Tingkatan 6 - Peperiksaan STPM 2026 Semester 2", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM", dateDisplay: "29 Jun – 06 Jul" },

    // JULAI 2026
    { date: "2026-07-04", dayDisplay: "04", monthDisplay: "Jul", year: "2026", title: "Karnival/Kem Kepemimpinan KK", category: "Kokurikulum", time: "08:00 AM", venue: "Tapak Perkhemahan", ic: "Setiausaha Kokurikulum" },
    { date: "2026-07-07", dayDisplay: "07-17", monthDisplay: "Jul", year: "2026", title: "Tingkatan 6 – School MUET Speaking Test 2 (Calon MUET Sesi 3)", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Ujian MUET", ic: "Guru MUET" },
    { date: "2026-07-14", dayDisplay: "14", monthDisplay: "Jul", year: "2026", title: "Mesyuarat JK Disiplin Murid Bil. 3", category: "HEM", time: "02:30 PM", venue: "Bilik Disiplin", ic: "Ketua Guru Disiplin" },
    { date: "2026-07-15", dayDisplay: "15", monthDisplay: "Jul", year: "2026", title: "Mesyuarat JK HEM Bil. 3", category: "HEM", time: "02:30 PM", venue: "Bilik Mesyuarat Anggerik", ic: "PK HEM" },
    { date: "2026-07-18", dayDisplay: "18", monthDisplay: "Jul", year: "2026", title: "Tingkatan 6 – School MUET Written Test 2 (Calon MUET Sesi 3)", category: "Kurikulum", time: "08:00 AM", venue: "Kelas T6", ic: "Guru MUET" },
    { date: "2026-07-22", dayDisplay: "22", monthDisplay: "Jul", year: "2026", title: "Cuti Umum Sarawak : Hari Sarawak", category: "Pentadbiran", time: "Cuti Am", venue: "-", ic: "Kerajaan Negeri" },
    { date: "2026-07-24", dayDisplay: "24", monthDisplay: "Jul", year: "2026", title: "Hari Sukan Tahunan Sekolah", category: "Kokurikulum", time: "07:30 AM", venue: "Padang Sekolah", ic: "Setiausaha Sukan" },

    // OGOS 2026
    { date: "2026-08-06", dayDisplay: "06", monthDisplay: "Ogo", year: "2026", title: "Mesyuarat Staf, Kurikulum, HEM, KO-K & T.6 Bil. 3 / 2026", category: "Pentadbiran", time: "02:30 PM", venue: "Dewan Seri Bintang", ic: "Pengetua" },
    { date: "2026-08-10", dayDisplay: "10", monthDisplay: "Ogo", year: "2026", title: "Kemaskini Rekod KK/Sukan & PAJSK 2", category: "Kokurikulum", time: "Sepanjang Hari", venue: "Online", ic: "Guru Penasihat" },
    { date: "2026-08-10", dayDisplay: "10-13", monthDisplay: "Ogo", year: "2026", title: "Mesyuarat Bidang Bil. 3", category: "Kurikulum", time: "02:30 PM", venue: "Bilik GKMP", ic: "Semua GKMP" },
    { date: "2026-08-10", dayDisplay: "10-13", monthDisplay: "Ogo", year: "2026", title: "Tingkatan 6 - Mesyuarat Panitia & Pengurusan Kerja Kursus T6 Bil. 3", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Mesyuarat T6", ic: "Penyelaras T6" },
    { date: "2026-08-10", dayDisplay: "10-21", monthDisplay: "Ogo", year: "2026", title: "Penilaian Sekolah 3 / Percubaan 1 SPM", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Darjah & Dewan", ic: "S/U Peperiksaan" },
    { date: "2026-08-17", dayDisplay: "17-20", monthDisplay: "Ogo", year: "2026", title: "Mesyuarat Panitia Bil.3", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Panitia", ic: "Ketua Panitia" },
    { date: "2026-08-17", dayDisplay: "17", monthDisplay: "Ogo", year: "2026", title: "Pemantauan Rekod KK/Sukan & PAJSK 2 Oleh PKKK & Penyelaras", category: "Kokurikulum", time: "Sepanjang Hari", venue: "Pejabat Kokurikulum", ic: "PK Kokurikulum" },
    { date: "2026-08-24", dayDisplay: "24-28", monthDisplay: "Ogo", year: "2026", title: "Tingkatan 6 – Ujian Sekolah Semester 3 (USS3)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM" },
    { date: "2026-08-29", dayDisplay: "29-06", monthDisplay: "Ogo/Sep", year: "2026", title: "Cuti Penggal 2 Tahun 2026", category: "Pentadbiran", time: "Cuti Sekolah", venue: "-", ic: "KPM", dateDisplay: "29 Ogos – 06 Sept" },

    // SEPTEMBER 2026
    { date: "2026-09-07", dayDisplay: "07-25", monthDisplay: "Sep", year: "2026", title: "Tingkatan 6 – School MUET Speaking Test 3 (Calon MUET Sesi 3)", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Ujian MUET", ic: "Guru MUET" },
    { date: "2026-09-09", dayDisplay: "09", monthDisplay: "Sep", year: "2026", title: "Kuiz Dalam Talian Sukan & Permainan", category: "Kokurikulum", time: "02:30 PM", venue: "Atas Talian", ic: "Penyelaras Sukan" },
    { date: "2026-09-12", dayDisplay: "12", monthDisplay: "Sep", year: "2026", title: "Kem & Karnival Perkhemahan Badan Beruniform", category: "Kokurikulum", time: "08:00 AM", venue: "Kawasan Sekolah", ic: "Penyelaras Uniform" },
    { date: "2026-09-16", dayDisplay: "16", monthDisplay: "Sep", year: "2026", title: "Hari Malaysia (Cuti Umum)", category: "Pentadbiran", time: "Cuti Am", venue: "-", ic: "Kerajaan" },
    { date: "2026-09-19", dayDisplay: "19", monthDisplay: "Sep", year: "2026", title: "Tingkatan 6 – School MUET Written Test 3 (Calon MUET Sesi 3)", category: "Kurikulum", time: "08:00 AM", venue: "Kelas T6", ic: "Guru MUET" },
    { date: "2026-09-23", dayDisplay: "23", monthDisplay: "Sep", year: "2026", title: "LDP Pengurusan & Penilaian KK/Sukan", category: "Kokurikulum", time: "02:00 PM", venue: "Bilik Tayangan", ic: "PK Kokurikulum" },
    { date: "2026-09-26", dayDisplay: "26", monthDisplay: "Sep", year: "2026", title: "Hari Sukan Malaysia / Karnival Sukan & Permainan / Merentas Desa", category: "Kokurikulum", time: "07:30 AM", venue: "Padang & Sekitar", ic: "Setiausaha Sukan" },
    { date: "2026-09-28", dayDisplay: "28", monthDisplay: "Sep", year: "2026", title: "Kemaskini Rekod KK/Sukan & PAJSK 3", category: "Kokurikulum", time: "Sepanjang Hari", venue: "Online", ic: "Guru Penasihat" },

    // OKTOBER 2026
    { date: "2026-10-05", dayDisplay: "05", monthDisplay: "Okt", year: "2026", title: "Pemantauan Rekod KK/Sukan & PAJSK 3 Oleh PKKK & Penyelaras", category: "Kokurikulum", time: "Sepanjang Hari", venue: "Pejabat Kokurikulum", ic: "PK Kokurikulum" },
    { date: "2026-10-05", dayDisplay: "05-08", monthDisplay: "Okt", year: "2026", title: "Tingkatan 6 - Mesyuarat Panitia & Pengurusan Kerja Kursus T6 Bil. 4", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Mesyuarat T6", ic: "Penyelaras T6" },
    { date: "2026-10-10", dayDisplay: "10", monthDisplay: "Okt", year: "2026", title: "Hari Jadi TYT Sarawak", category: "Pentadbiran", time: "Cuti Am (Sarawak)", venue: "-", ic: "Kerajaan Negeri" },
    { date: "2026-10-06", dayDisplay: "06-14", monthDisplay: "Okt", year: "2026", title: "Tingkatan 6 – Ujian Bertutur MUET Sesi 3 Tahun 2026", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Ujian MUET", ic: "Setiausaha MUET" },
    { date: "2026-10-05", dayDisplay: "05-16", monthDisplay: "Okt", year: "2026", title: "Peperiksaan Percubaan 2 SPM", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha Peperiksaan", dateDisplay: "05 – 16 Okt" },
    { date: "2026-10-17", dayDisplay: "17", monthDisplay: "Okt", year: "2026", title: "Tingkatan 6 – Ujian Bertulis MUET Sesi 3 Tahun 2026", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha MUET" },
    { date: "2026-10-19", dayDisplay: "19-23", monthDisplay: "Okt", year: "2026", title: "Ujian Akhir Sesi Akademik (UASA) (Tingkatan 1-3)", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Darjah", ic: "Penyelaras UASA" },
    { date: "2026-10-19", dayDisplay: "19-23", monthDisplay: "Okt", year: "2026", title: "Tingkatan 6 – Ujian Percubaan Semester 3 (UPS3)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM" },
    { date: "2026-10-19", dayDisplay: "19-22", monthDisplay: "Okt", year: "2026", title: "Ujian Bertutur BM SPM", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Ujian BM", ic: "Setiausaha SPM" },
    { date: "2026-10-24", dayDisplay: "24", monthDisplay: "Okt", year: "2026", title: "Hari Ucapan 2026", category: "Pentadbiran", time: "08:30 AM", venue: "Dewan Seri Bintang", ic: "Penyelaras Hari Ucapan" },
    { date: "2026-10-26", dayDisplay: "26-28", monthDisplay: "Okt", year: "2026", title: "Ujian Bertutur BI SPM", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Ujian BI", ic: "Setiausaha SPM" },

    // NOVEMBER 2026
    { date: "2026-11-02", dayDisplay: "02-04", monthDisplay: "Nov", year: "2026", title: "Ujian Amali Sains SPM", category: "Kurikulum", time: "08:00 AM", venue: "Makmal Sains", ic: "Setiausaha SPM", dateDisplay: "02 – 04 Nov" },
    { date: "2026-11-02", dayDisplay: "02-05", monthDisplay: "Nov", year: "2026", title: "Mesyuarat Bidang Bil. 4", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Khas GKMP", ic: "Semua GKMP" },
    { date: "2026-11-09", dayDisplay: "09", monthDisplay: "Nov", year: "2026", title: "Cuti Umum : Hari Deepavali (Peruntukan KPM)", category: "Pentadbiran", time: "Cuti Am", venue: "-", ic: "KPM" },
    { date: "2026-11-09", dayDisplay: "09-12", monthDisplay: "Nov", year: "2026", title: "Mesyuarat Panitia Bil.4", category: "Kurikulum", time: "02:30 PM", venue: "Bilik Panitia", ic: "Ketua Panitia" },
    { date: "2026-11-10", dayDisplay: "10", monthDisplay: "Nov", year: "2026", title: "Mesyuarat JK Disiplin Murid Bil. 4", category: "HEM", time: "02:30 PM", venue: "Bilik Disiplin", ic: "Ketua Guru Disiplin" },
    { date: "2026-11-11", dayDisplay: "11", monthDisplay: "Nov", year: "2026", title: "Mesyuarat JK HEM Bil. 4", category: "HEM", time: "02:30 PM", venue: "Bilik Mesyuarat Anggerik", ic: "PK HEM" },
    { date: "2026-11-09", dayDisplay: "09-20", monthDisplay: "Nov", year: "2026", title: "Penilaian Sekolah 4 (Kelas Peralihan & Tingkatan 4)", category: "Kurikulum", time: "08:00 AM", venue: "Bilik Darjah", ic: "S/U Peperiksaan" },
    { date: "2026-11-17", dayDisplay: "17-26", monthDisplay: "Nov", year: "2026", title: "Tingkatan 6 - Peperiksaan STPM 2026 Semester 3 (S3)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM" },
    { date: "2026-11-12", dayDisplay: "12", monthDisplay: "Nov", year: "2026", title: "Ujian Mendengar BM & BI SPM 2026", category: "Kurikulum", time: "08:00 AM", venue: "Dewan & Kelas", ic: "Setiausaha SPM" },
    { date: "2026-11-16", dayDisplay: "16", monthDisplay: "Nov", year: "2026", title: "Peperiksaan SPM 2026 Bertulis bermula", category: "Kurikulum", time: "08:00 AM", venue: "Dewan & Kelas Khas", ic: "Setiausaha SPM" },
    { date: "2026-11-30", dayDisplay: "30-07", monthDisplay: "Nov/Dis", year: "2026", title: "Tingkatan 6 - Peperiksaan STPM 2026 Ulangan Semester 1 (U1)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM", dateDisplay: "30 Nov – 07 Dis" },

    // DISEMBER 2026
    { date: "2026-12-04", dayDisplay: "04", monthDisplay: "Dis", year: "2026", title: "Mesyuarat Staf, Kurikulum, HEM, KO-K & T.6 Bil. 4 / 2026", category: "Pentadbiran", time: "02:30 PM", venue: "Dewan Seri Bintang", ic: "Pengetua" },
    { date: "2026-12-05", dayDisplay: "05", monthDisplay: "Dis", year: "2026", title: "Pendaftaran Pelajar Baharu Tingkatan Peralihan dan Tingkatan 1 2027", category: "HEM", time: "08:00 AM", venue: "Dewan Seri Bintang", ic: "PK HEM" },
    { date: "2026-12-05", dayDisplay: "05-31", monthDisplay: "Dis", year: "2026", title: "Cuti Akhir Persekolahan Tahun 2026", category: "Pentadbiran", time: "Cuti Sekolah", venue: "-", ic: "KPM" },
    { date: "2026-12-06", dayDisplay: "06", monthDisplay: "Dis", year: "2026", title: "Khidmat Masyarakat Badan Beruniform (Gotong Royong) – 4 Jam", category: "Kokurikulum", time: "08:00 AM", venue: "Kawasan Sekolah", ic: "S/U Kokurikulum" },
    { date: "2026-12-10", dayDisplay: "10-17", monthDisplay: "Dis", year: "2026", title: "Tingkatan 6 - Peperiksaan STPM 2026 Ulangan Semester 2 (U2)", category: "Kurikulum", time: "08:00 AM", venue: "Dewan Peperiksaan", ic: "Setiausaha STPM" },
    { date: "2026-12-28", dayDisplay: "28", monthDisplay: "Dis", year: "2026", title: "Mesyuarat Pengurusan & Pentadbiran Tertinggi Tahun 2026", category: "Pentadbiran", time: "08:30 AM", venue: "Bilik Mesyuarat", ic: "Pengetua" },
    { date: "2026-12-29", dayDisplay: "29", monthDisplay: "Dis", year: "2026", title: "Mesyuarat Staf & Kurikulum Bil. 1 / 2027", category: "Pentadbiran", time: "08:30 AM", venue: "Dewan Seri Bintang", ic: "Pengetua" },
    { date: "2026-12-30", dayDisplay: "30", monthDisplay: "Dis", year: "2026", title: "Mesyuarat HEM, KO-K & T.6 Bil. 1 / 2027", category: "Pentadbiran", time: "08:30 AM", venue: "Dewan Seri Bintang", ic: "PK HEM" },
    { date: "2026-12-31", dayDisplay: "31", monthDisplay: "Dis", year: "2026", title: "Hari Pra Persekolahan Sesi Persekolahan 2027", category: "Pentadbiran", time: "08:00 AM", venue: "Sekolah", ic: "Semua Guru" },

    // JANUARI 2027
    { date: "2027-01-04", dayDisplay: "04", monthDisplay: "Jan", year: "2027", title: "Penggal 1 Sesi Persekolahan 2027 bermula", category: "Pentadbiran", time: "07:30 AM", venue: "Dataran Perhimpunan", ic: "Semua Guru" }
  ],
};
