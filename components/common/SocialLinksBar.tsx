import React from "react";
import SocialLink from "./SocialLinks";

const SocialLinksBar = () => {
  return (
    <div className="flex gap-4">
      <SocialLink
        platform="linkedin"
        identifier="Panaversity"
        label="Panaversity"
        className="bg-white hover:bg-white text-black hover:text-black"
        href="https://www.linkedin.com/company/panaversity"
      />
      <SocialLink
        platform="youtube"
        identifier="@panverse"
        label="Panaversity"
        className="bg-white hover:bg-white text-black hover:text-black"

      />
      <SocialLink
        platform="github"
        identifier="panaversity"
        label="Panaversity"
        className="bg-white hover:bg-white text-black hover:text-black"

      />
      <SocialLink
        platform="whatsapp"
        identifier="923006659819"
        label="Chat Now"
        className="bg-white max-sm:hidden hover:bg-white text-black hover:text-black"

      />
    </div>
  );
};

export default SocialLinksBar;
