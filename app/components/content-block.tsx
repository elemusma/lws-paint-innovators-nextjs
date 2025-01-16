// components/CustomSection.js

export default function ContentBlock() {
  return (
    <>
      <section className={""} style={{}}>
        <div className="mx-auto px-4 max-w-7xl pt-5">
          <div className="flex justify-center">
            <div
              className="lg:w-10/12 text-center relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Expert Witnesss Consulting for Complex Technical Legal Cases
              </h1>

              <p className="text-lg md:text-xl mb-6">
                Discovery Engineering explains complex technical evidence in
                clear and meaningful language for civil and criminal cases
                nationwide.
              </p>

              <a
                href="/get-started/"
                className="inline-block bg-blue-600 hover:bg-blue-700 font-semibold py-3 px-6 rounded shadow-md mt-4"
              >
                Speak with an Expert
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
