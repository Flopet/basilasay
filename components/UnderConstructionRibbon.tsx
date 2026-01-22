import "./css/UnderConstructionRibbon.css"
import {GithubRibbon} from "@/components/GithubRibbon";

export function UnderConstructionRibbon() {
  return (
      <div className="ribbon-container">
        <GithubRibbon/>
        <span id="ribbon"></span>
      </div>
  )
}