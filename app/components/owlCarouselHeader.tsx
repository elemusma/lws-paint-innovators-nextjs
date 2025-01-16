import OwlCarousel from "./owlCarousel";

export default function OwlCarouselHeader() {
  const carouselOptions = {
    items: 3,
    margin: 10,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  };

  return (
    <OwlCarousel options={carouselOptions}>
      <div className="item">Slide 1</div>
      <div className="item">Slide 2</div>
      <div className="item">Slide 3</div>
    </OwlCarousel>
  );
}
