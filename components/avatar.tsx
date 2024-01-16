import Image from 'next/image'

type Props = {
  alt: string;
  src: string;
};

const Avatar = ({ alt, src }: Props) => {
  return (<Image src={src} alt={alt} width="64" height="64" />)
}

export default Avatar;

