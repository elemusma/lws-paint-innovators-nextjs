import Link from "next/link";
import { usePathname } from "next/navigation";
interface IndustriesLinksProps {
  onClick?: () => void;
}
export default function CareersLinks({ onClick }: IndustriesLinksProps) {
  const pathname = usePathname(); // Get the current route
  return (
    <>
      {[
        {
          name: "Painter / Drywall Finisher",
          path: "/careers/painter-drywall-finisher",
        },
        {
          name: "El Pintor / Masero",
          path: "/careers/pintor-masero",
        },
        {
          name: "Office Associate",
          path: "/careers/office-associate",
        },
        {
          name: "Project Estimator",
          path: "/careers/project-estimator",
        },
        {
          name: "Project Manager",
          path: "/careers/project-manager",
        },
      ].map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            className={`block px-4 py-2 ${
              pathname === item.path
                ? "bg-white !text-[var(--neutral)] active"
                : ""
            }`}
            onClick={onClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
}
