import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div class="footer-2 pt-6 md:pt-12 border-t-2 border-black">
      <div class="container px-4 mx-auto">
        <div class="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12 justify-between">
          <div class="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div class="sm:flex">
              <div class="sm:flex-1 mt-4 sm:mt-0">
                <h6 class="text-sm font-medium uppercase mb-2">Help</h6>
                <div>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Shipping
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Returns & Exchanges
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Warranty
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Accessibility Statement
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    FAQ
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Contact Us
                  </a>
                </div>
              </div>
              <div class="sm:flex-1 mt-4 sm:mt-0">
                <h6 class="text-sm font-medium uppercase mb-2">Resources</h6>
                <div>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Jewelry Care
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Ring Sizer
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Style Edit
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Supplier Code of Conduct
                  </a>
                </div>
              </div>
              <div class="sm:flex-1 mt-4 sm:mt-0">
                <h6 class="text-sm font-medium uppercase mb-2">About Modern</h6>
                <div>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Our Mission
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Sustainability
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Materials
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Commitments
                  </a>
                  <a href="#" class="text-xs py-2 block hover:underline">
                    Careers
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
            <h5 class="text-base font-medium mb-1">Join The Fine Crew</h5>
            <p class="text-xs mb-4">
              Insider info on new arrivals, early access, and everything fine.
            </p>
            <input
              type="text"
              class="md:px-12 w-80 border py-2.5 pl-7 pr-20 placeholder:text-gray-500"
              placeholder="Your email"
            />
          </div>
        </div>
      </div>

      <div class="border-t border-solid border-gray-900 mt-4 py-4 subfooter">
        <div class="container px-4 mx-auto">
          <div class="md:flex md:-mx-4 md:items-center">
            <div class="md:flex-1 md:px-4 text-center md:text-left text-xs">
              <p>
                &copy; <strong>FWR</strong>
              </p>
            </div>
            <div class="md:flex-1 md:px-4 text-center md:text-right">
              <a
                href="#"
                class="text-xs py-2 px-4 inline-block hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="#"
                class="text-xs py-2 px-4  inline-block hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                class="text-xs py-2 px-4  inline-block hover:underline"
              >
                &copy; 2023Modern Inc.{" "}
              </a>
              <a
                href="#"
                class="text-xs py-2 px-4  inline-block hover:underline"
              >
                <InstagramIcon />{" "}
              </a>
              <a
                href="#"
                class="text-xs py-2 px-4  inline-block hover:underline"
              >
                <PinterestIcon />{" "}
              </a>
              <a
                href="#"
                class="text-xs py-2 px-4  inline-block hover:underline"
              >
                <TwitterIcon />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
