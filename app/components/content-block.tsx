// components/ContentBlock.js
export default function ContentBlock({
  sectionClassName = "",
  containerClassName = "mx-auto px-4 max-w-7xl pt-5",
  rowClassName = "flex justify-center",
  columnClassName = "lg:w-10/12 text-center relative",
  children,
}: {
  sectionClassName?: string;
  containerClassName?: string;
  rowClassName?: string;
  columnClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={rowClassName}>
          <div
            className={columnClassName}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
