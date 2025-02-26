import { Company, Email, Phone } from "../../components/globals";
// import Navigation from "./components/navigation";
// import Footer from "./components/footer";

export default function WallPaperRemoval() {
  return (
    <div className="wallpaper-removal-container max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Professional Wallpaper Removal
      </h1>

      <div className="content-wrapper grid md:grid-cols-2 gap-8">
        <div className="info-section">
          <h2 className="text-2xl font-semibold mb-4">
            Expert Wallpaper Removal Services
          </h2>
          <p className="text-gray-700 mb-4">
            At {Company}, we specialize in professional wallpaper removal using
            industry-leading techniques and equipment. Our experienced team
            ensures a clean, damage-free surface ready for your next wall
            treatment.
          </p>

          <ul className="list-disc pl-5 mb-6">
            <li>Safe and efficient removal process</li>
            <li>Surface preparation for new finishes</li>
            <li>Commercial and industrial expertise</li>
            <li>Minimal disruption to your space</li>
          </ul>
        </div>

        <div className="contact-section bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Request a Quote</h3>
          <p className="mb-4">
            Contact us for professional wallpaper removal services in Arkansas,
            Oklahoma, and Colorado.
          </p>
          <div className="contact-info">
            <p className="font-bold">Call us: {Phone}</p>
            <p className="font-bold">Email: {Email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
