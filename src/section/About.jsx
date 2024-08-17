const About = () => {
  return (
    <div className="flex flex-col gap-8 mt-8 max-w-screen-md mx-auto container">
      <div className="px-4 lg:px-0 gap-4 lg:gap-52 grid grid-cols-1 lg:grid-cols-[150px_1fr]">
        <div>
          <h1 className="font-figtree font-semibold">Profile</h1>
        </div>

        <div className="flex flex-col gap-10">
          <p className="font-figtree text-justify">
            Seorang Spesialis SEO dan Periklanan dengan pengalaman satu tahun
            lebih yang berorientasi pada pencapaian hasil. Mempunyai pengalaman
            dalam memimpin tim pemasaran dan periklanan pada platform Meta,
            TikTok Shop, dan marketplace sebuah perusahaan fashion brand lokal
            Jawa Timur. Sebagai sarjana Teknik Informatika yang berfokus pada
            bidang digital marketing memiliki keahlian dalam analisa, pemasaran,
            dan coding serta menyukai interaksi interpersonal juga public
            speaking.
          </p>
          <div>
            <a
              href="#"
              className="font-figtree font-semibold px-3 py-2 bg-black text-white dark:text-black dark:bg-white rounded-full">
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-0 flex flex-col gap-3 font-figtree my-9">
        <h1 className="font-figtree font-semibold mb-5">Work Experience</h1>
        <>
          {/* Timeline */}
          <div>
            {/* Heading */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium uppercase text-gray-500 dark:text-neutral-400">
                Markaskaos.id (Fashion Brand Lokal) - Tulungagung
              </h3>
              <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                Agustus, 2023 - Sekarang
              </h3>
            </div>
            {/* End Heading */}
            {/* Item */}
            <div className="flex gap-x-3">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
                </div>
              </div>
              {/* End Icon */}
              {/* Right Content */}
              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 text-gray-800 dark:text-white">
                  <svg
                    className="shrink-0 size-4 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1={16} x2={8} y1={13} y2={13} />
                    <line x1={16} x2={8} y1={17} y2={17} />
                    <line x1={10} x2={8} y1={9} y2={9} />
                  </svg>
                  Memimpin staff digital marketing dalam melaksanakan pemasaran
                  produk secara online melalui berbagai platform
                </h3>
                <div className="flex gap-x-2">
                  <p className="my-2 text-sm border px-2 py-1 rounded-md border-teal-500 bg-teal-50-800 dark:bg-neutral-700">
                    SEO dan Periklanan
                  </p>
                </div>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="flex gap-x-3">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
                </div>
              </div>
              {/* End Icon */}
              {/* Right Content */}
              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 text-gray-800 dark:text-white">
                  Mengoptimalkan website perusahaan agar mencapai hasil
                  tertinggi dalam pencarian organik menggunakan teknik SEO.
                </h3>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="flex gap-x-3">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
                </div>
              </div>
              {/* End Icon */}
              {/* Right Content */}
              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 text-gray-800 dark:text-white">
                  Mendesain dan meluncurkan kampanye iklan digital yang sukses
                  dengan menggunakan platform seperti facebook ads dan tiktok
                  ads.🤩
                </h3>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}

            {/* Heading */}
            <div className="flex justify-between items-center my-3">
              <h3 className="text-lg font-medium uppercase text-gray-500 dark:text-neutral-400">
                GM Academy (Digital Marketing Agency) - Malang
              </h3>
              <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                September 2022 - November 2022
              </h3>
            </div>
            {/* End Heading */}
            {/* Item */}
            <div className="flex gap-x-3">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
                </div>
              </div>
              {/* End Icon */}
              {/* Right Content */}
              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 text-gray-800 dark:text-white">
                  Mampu memahami konsep dan strategi SEO yang baik termasuk
                  melakukan riset keyword dan riset pasar yang cocok untuk
                  produk 😎
                </h3>
                <div className="flex gap-x-2">
                  <p className="my-2 text-sm border px-2 py-1 rounded-md border-teal-500 bg-teal-50-800 dark:bg-neutral-700">
                    Internship
                  </p>
                </div>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="flex gap-x-3">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
                </div>
              </div>
              {/* End Icon */}
              {/* Right Content */}
              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 text-gray-800 dark:text-white">
                  Membuat konten multimedia untuk kebutuhan digital marketing📱
                </h3>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="flex gap-x-3">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
                </div>
              </div>
              {/* End Icon */}
              {/* Right Content */}
              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 text-gray-800 dark:text-white">
                  Mengoptimalkan penggunaan media sosial, marketplace, dan forum
                  sebagai platform sarana pemasaran produk.
                </h3>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}
          </div>
          {/* End Timeline */}
        </>
      </div>
    </div>
  );
};

export default About;
