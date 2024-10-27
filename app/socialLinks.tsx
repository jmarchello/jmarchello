import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SocialLink = ({href, icon}) => ( 
  <Link href={href} target="_blank" className="flex-1 text-center first:text-start last:text-end">
    <FontAwesomeIcon icon={icon} className="text-white/60"/>
  </Link>
)

export default function Links() {
  return (
    <div className="flex flex-row w-16 text-2xl mt-6 pt-4 border-t-8 border-white/60">
      <SocialLink href="https://github.com/jmachello" icon={faGithub}/>
      <SocialLink href="https://www.linkedin.com/in/joshmarchello" icon={faLinkedin}/>
    </div>
  );
}
