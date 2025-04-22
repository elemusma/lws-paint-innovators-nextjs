"use client";
import * as motion from "motion/react-client";
import Image from "next/image";
import React, {
  isValidElement,
  useEffect,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

interface TeamColProps {
  colClassName?: string;
  img: string;
  name: string;
  nameTag?: string; // String for dynamic element type
  nameTagClassName?: string;
  description?: ReactNode;
  role: string;
  delay?: number;
  maxDescriptionLength?: number;
  buttonLink?: string;
  buttonText?: string;
  buttonTarget?: string;
  buttonAriaLabel?: string;
}

function extractTextFromJSX(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";

  if (isValidElement(node)) {
    const element = node as ReactElement;
    const props = element.props as { children?: ReactNode };
    if (Array.isArray(props.children)) {
      return props.children.map((child) => extractTextFromJSX(child)).join(" ");
    }
    return extractTextFromJSX(props.children);
  }

  if (Array.isArray(node)) {
    return node.map((child) => extractTextFromJSX(child)).join(" ");
  }

  return "";
}

export default function TeamCol({
  colClassName,
  img,
  name,
  nameTag = "h3", // Default to 'h3'
  nameTagClassName,
  description,
  role,
  delay,
  maxDescriptionLength = 195,
  buttonLink,
  buttonText = "Learn More",
  buttonTarget = "_self",
  buttonAriaLabel,
}: TeamColProps) {
  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
      },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const fullText = description ? extractTextFromJSX(description) : "";
  const shouldTruncate = fullText.length > maxDescriptionLength;
  // const truncatedText = shouldTruncate
  //   ? `${fullText.substring(0, maxDescriptionLength)}...`
  //   : fullText;

  // Dynamically creating the nameTag element
  const NameTag = nameTag;

  return (
    <>
      <div className={`lg:w-1/3 md:w-1/2 w-full px-4 ${colClassName}`}>
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="team-col__img relative z-10 transform translate-y-[35px] overflow-hidden rounded-lg w-[90%] mx-auto">
            <Image
              src={img}
              alt={`${name} Headshot`}
              className="hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{
                height: "315px",
                objectFit: "cover",
                objectPosition: "top",
              }}
              width={1000}
              height={1000}
            />
          </div>
          <div
            className="team-col__content rounded-lg pb-8 px-4 pt-[50px] box-shadow"
            style={{
              background:
                "linear-gradient(0deg, rgba(219,219,219,1) 0%, rgba(255,255,255,1) 80%)",
              boxShadow: "0px 0px 4px rgba(199, 199, 199, 0.85)",
            }}
          >
            {React.createElement(
              NameTag,
              {
                className: `team-col__title text-center font-proxima-bold ${nameTagClassName}`,
              },
              name
            )}
            <p className="team-col__text text-center">{role}</p>

            <div className="mt-4 mb-4">
              <div className="text-gray-700">
                {shouldTruncate ? (
                  <>
                    {description && <span>{description}</span>}
                    <span>...</span>
                  </>
                ) : (
                  description
                )}
              </div>
            </div>

            {/* Conditional button rendering */}
            {buttonLink ? (
              <a
                href={buttonLink}
                className="btn-main square w-full text-center cursor-pointer"
                target={buttonTarget}
                aria-label={buttonAriaLabel || `Learn more about ${name}`}
              >
                {buttonText}
              </a>
            ) : shouldTruncate ? (
              <button
                className="btn-main square w-full text-center cursor-pointer"
                onClick={() => setIsModalOpen(true)}
                aria-label={buttonAriaLabel || `Learn more about ${name}`}
              >
                Read More
              </button>
            ) : null}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex items-center mb-4">
              <Image
                src={img}
                alt={`${name} Headshot`}
                className="rounded-[50%]"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                width={100}
                height={100}
              />
              <div className="pl-4">
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <h3 className="text-xl text-gray-600 mb-4">{role}</h3>
              </div>
            </div>
            <div className="prose max-w-none">{description}</div>
          </div>
        </div>
      )}
    </>
  );
}
