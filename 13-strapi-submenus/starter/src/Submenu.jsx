import sublinks from "./data";
import { useGlobalContext } from "./context";
import { useRef } from "react";

function Submenu() {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  const divRef = useRef(null);
  function handleMove(event) {
    const submenu = divRef.current.getBoundingClientRect();
    const { clientX, clientY } = event;
    const {right, left, bottom} = submenu;
    if(clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1 ){
      setPageId(null);
    }
  }
  return (
    <div className={currentPage ? "submenu show-submenu" : "submenu"} onMouseLeave={handleMove} ref={divRef}>
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;
