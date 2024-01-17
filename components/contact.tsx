import Link from "next/link"
import Avatar from "./avatar"
import { useDeviceDetect } from "@/hooks/useDeviceDetect";

const Contact = () => {
  const { isMobile } = useDeviceDetect();
  return (
    <div className="bg-base-100 pt-6">
      <div className="max-w text-center p-10">
        <h1 className="text-5xl font-bold pb-1">{`Contactez-moi`}</h1>
        <div className="flex items-center justify-center py-6">
          <div className="mockup-phone border-primary" style={{ minWidth: '350px', transform: 'perspective(1500px) rotateY(10deg) rotateX(5deg)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px' }}>
            <div className="camera" />
            <div className="display">
              <div className="artboard artboard-demo min-w-72 phone-1 justify-end">
                <div className="flex items-end justify-end p-1">
                  <div className="flex flex-col max-w-screen-md w-full">

                    <div className="grid flex-grow card">
                      <div className="chat chat-end mb-1">
                        <div className="chat-image avatar online">
                          <div className="sm:w-9 w-7 rounded-full">
                            <Avatar src="/img/custonphone-A.jpg" alt="Avatar pic of custonphone"></Avatar>
                          </div>
                        </div>
                        <div className="chat-bubble px-3 pt-1 pb-2 bg-opacity-70 backdrop-blur transition-shadow text-right">{`A quel numéro puis-je vous joindre ?`}</div>
                      </div>
                    </div>

                    <div />

                    <div className="grid flex-grow card">
                      <div className="chat chat-start mb-1">
                        <div className="chat-image avatar online">
                          <div className="sm:w-9 w-7 rounded-full">
                            <Avatar src="/img/avatar-B.jpg" alt="Avatar pic of Tib0"></Avatar>
                          </div>
                        </div>
                        <div className="chat-bubble px-3 pt-1 pb-2 bg-opacity-70 backdrop-blur transition-shadow text-left">{`Vous pouvez m'appeler au`}<br /><Link className="font-bold text-primary" href={isMobile ? "tel:0145786178" : "/#contact"}>01 45 78 61 78</Link></div>
                      </div>
                    </div>

                    <div />

                    <div className="grid flex-grow card">
                      <div className="chat chat-end mb-1">
                        <div className="chat-image avatar online">
                          <div className="sm:w-9 w-7 rounded-full">
                            <Avatar src="/img/custonphone-A.jpg" alt="Avatar pic of custonphone"></Avatar>
                          </div>
                        </div>
                        <div className="chat-bubble px-3 pt-1 pb-2 bg-opacity-70 backdrop-blur transition-shadow text-right">{`Et par mail?`}</div>
                      </div>
                    </div>

                    <div />

                    <div className="grid flex-grow card">
                      <div className="chat chat-start mb-1">
                        <div className="chat-image avatar online">
                          <div className="sm:w-9 w-7 rounded-full">
                            <Avatar src="/img/avatar-B.jpg" alt="Avatar pic of Tib0"></Avatar>
                          </div>
                        </div>
                        <div className="chat-bubble px-3 pt-1 pb-2 bg-opacity-70 backdrop-blur transition-shadow text-left">{`Envoyez-moi un email à l'adresse `}<br /><Link className="font-bold text-primary" href="mailto:thib.mart.pro@gmail.com">thib.mart.pro@gmail.com</Link></div>
                      </div>
                    </div>

                    <div />

                    <div className="grid flex-grow card">
                      <div className="chat chat-start mb-1">
                        <div className="chat-image avatar online">
                          <div className="sm:w-9 w-7 rounded-full">
                            <Avatar src="/img/avatar-B.jpg" alt="Avatar pic of Tib0"></Avatar>
                          </div>
                        </div>
                        <div className="chat-bubble px-3 pt-1 pb-2 bg-opacity-70 backdrop-blur transition-shadow text-left">{`Je vous réponds dans les plus brefs délais`}</div>
                      </div>
                    </div>

                    <div className="divider m-0" />

                    <div className="flex justify-around flex-grow">
                      <a aria-label="Tél." role="button" className={isMobile ? "btn btn-ghost" : "btn btn-ghost text-opacity-70"} href={isMobile ? "tel:0145786178" : "/#contact"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="2 2 26 26"><text y="1.1em" fontSize="20">📞</text></svg>
                        Tél.
                      </a>
                      <a aria-label="Mail" role="button" className="btn btn-ghost" href="mailto:thib.mart.pro@gmail.com">
                        Mail
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="2 2 26 26"><text y=".9em" fontSize="20">📨</text></svg>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
