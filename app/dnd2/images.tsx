import Image from "next/image"

export default function MyImage(props:any) {
  return (
    <Image src={props.src} alt={props.name} width={props.width} height={props.height} className={props.className} />
    )
}