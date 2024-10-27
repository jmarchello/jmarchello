import Link from "next/link";

const MenuItem = ({href, label}) => (
  <Link href={href} className="group/menu-item flex flex-row text-gray-400 gap-2 hover:text-fuchsia-600 text-lg">
    <span className="group-hover/menu-item:text-white/0">//</span>
    <span>{label}</span>

  </Link>
)

export default function Menu() {
  return (
    <div className="flex flex-col">
      <MenuItem href="#" label="portfolio"/>
      <MenuItem href="#" label="blog"/>
      <MenuItem href="#" label="contact"/>
    </div>
  )
}
