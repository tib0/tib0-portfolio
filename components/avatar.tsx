import Image from "next/image"

type Props = {
  alt: string;
  src: string;
};

const Avatar = ({ alt, src }: Props) => {
  return (<Image 
    src={src} 
    alt={alt} 
    className="rounded-full"
    sizes="(max-width: 640px) 1.75rem, 2.25rem"
    quality={65}
    fill
  />)
}

export default Avatar;

