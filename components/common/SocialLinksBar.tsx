import React from "react";
import SocialLink from "./SocialLinks";

const SocialLinksBar = () => {
  return (
    <div className="flex gap-4">
      <SocialLink
        platform="linkedin"
        identifier="Panaversity"
        label="Panaversity"
        href="https://www.linkedin.com/company/panaversity"
      />
      <SocialLink
        platform="youtube"
        identifier="@panverse"
        label="Panaversity"
      />
      <SocialLink
        platform="github"
        identifier="panaversity"
        label="Panaversity"
      />
      <SocialLink
        platform="whatsapp"
        identifier="923006659819"
        label="Chat Now"
        className="max-sm:hidden"
      />
    </div>
  );
};

export default SocialLinksBar;
