import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" /><circle cx="12" cy="10" r="3" /><circle cx="12" cy="12" r="10" /></svg>
          <p className="text-white font-bold">Thibault MARTIN</p><p className="text-white">Développeur Web Fullstack</p>
          <p className="currentColor font-light">Tous droits réservés © Thibault MARTIN | 2024 / 2024</p>
        </aside>
        <nav>
          <header className="footer-title opacity-100">Social</header>
          <div className="grid grid-flow-col gap-4">
            <Link aria-label='Linkedin-Tib0' target="_blank" href="https://www.linkedin.com/in/thibault-martin-1b934083/"><svg fill="#ffffff" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_801_"> <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"></path> <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path> <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"></path></g></g></svg></Link>
            <Link aria-label='Github-Tib0' target="_blank" href="https://github.com/tib0"><svg fill="#ffffff" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 21c2-2-.5-6 3.5-6m0 0c-3 0-7-1-7-5 0-1.445.116-2.89.963-4V3L9 4.283C9.821 4.101 10.81 4 12 4s2.178.1 3 .283L18 3v2.952c.88 1.116 1 2.582 1 4.048 0 4-4 5-7 5Zm0 0c4 0 1.5 4 3.5 6M3 15c3 0 1.5 4 6 3"></path></g></svg></Link>
            <Link aria-label='Soundcloud-Tib0' target="_blank" href="https://soundcloud.com/rockinpef"><svg fill="#ffffff" width="24" height="24" viewBox="0 -15.5 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Soundcloud-color</title><desc>Created with Sketch.</desc><defs></defs><g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-301.000000, -469.000000)" fill="#ffffff"> <path d="M301,491.152608 C301,491.756664 301.215945,492.213396 301.647743,492.52299 C302.079587,492.832537 302.541182,492.941985 303.032573,492.851428 C303.494168,492.760824 303.81804,492.594702 304.004234,492.353108 C304.190336,492.111513 304.283433,491.711316 304.283433,491.152608 L304.283433,484.583839 C304.283433,484.115689 304.123374,483.719298 303.80321,483.394665 C303.483092,483.069986 303.092212,482.90767 302.630572,482.90767 C302.183852,482.90767 301.800433,483.069986 301.480269,483.394665 C301.160105,483.719298 301,484.115689 301,484.583839 L301,491.152608 L301,491.152608 Z M306.137273,493.961324 C306.137273,494.399303 306.289918,494.727695 306.595161,494.946685 C306.900449,495.165675 307.291329,495.275124 307.767799,495.275124 C308.25919,495.275124 308.657485,495.165629 308.962773,494.946685 C309.268016,494.727742 309.420661,494.399303 309.420661,493.961324 L309.420661,478.649296 C309.420661,478.196277 309.260556,477.807405 308.940437,477.482773 C308.620273,477.15814 308.229394,476.995778 307.767799,476.995778 C307.32108,476.995778 306.937615,477.15814 306.617497,477.482773 C306.297332,477.807452 306.137273,478.196277 306.137273,478.649296 L306.137273,493.961324 L306.137273,493.961324 Z M311.25221,494.686153 C311.25221,495.124087 311.408562,495.452525 311.721266,495.671515 C312.033969,495.890459 312.436017,495.999954 312.927454,495.999954 C313.403924,495.999954 313.794804,495.890459 314.100047,495.671515 C314.405335,495.452525 314.55798,495.124087 314.55798,494.686153 L314.55798,480.71053 C314.55798,480.242426 314.397875,479.842229 314.077756,479.510031 C313.757592,479.177833 313.374173,479.011757 312.927454,479.011757 C312.465813,479.011757 312.071226,479.177833 311.743647,479.510031 C311.416068,479.842229 311.252256,480.242426 311.252256,480.71053 L311.252256,494.686153 L311.25221,494.686153 Z M316.389483,494.754106 C316.389483,495.584671 316.940422,495.999954 318.042345,495.999954 C319.144223,495.999954 319.695161,495.584671 319.695161,494.754106 L319.695161,472.103177 C319.695161,470.834725 319.31545,470.117461 318.556027,469.951339 C318.064635,469.830519 317.580659,469.97399 317.104189,470.381707 C316.627673,470.789423 316.389438,471.363216 316.389438,472.103177 L316.389438,494.754106 L316.389483,494.754106 Z M321.616146,495.410983 L321.616146,470.766772 C321.616146,469.981556 321.846921,469.513452 322.308561,469.362415 C323.306219,469.12082 324.296463,469 325.279245,469 C327.557469,469 329.679432,469.543622 331.644951,470.630867 C333.610517,471.718111 335.200124,473.201747 336.413681,475.081774 C337.627284,476.961848 338.330867,479.034361 338.52443,481.299501 C339.432744,480.906869 340.400606,480.710577 341.42806,480.710577 C343.512766,480.710577 345.295936,481.458057 346.777525,482.953019 C348.25916,484.448026 349,486.244969 349,488.343986 C349,490.458088 348.25916,492.262597 346.777525,493.757558 C345.295936,495.252519 343.520227,496 341.450396,496 L322.018102,495.977349 C321.884041,495.932047 321.783529,495.848963 321.716521,495.728189 C321.649513,495.607415 321.616146,495.501587 321.616146,495.410983 L321.616146,495.410983 L321.616146,495.410983 Z" id="Soundcloud"></path></g></g></g></svg></Link>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Footer