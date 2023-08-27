//FIXME:  href="/" 이동 경로 추가 필요, nav css 모바일 대응 필요

const Nav = () => (
  <nav aria-label="Global">
    <ul className="flex items-center gap-6 text-sm">
      <li>
        <a className="text-gray-500 transition hover:text-gray-500/75">About</a>
      </li>

      <li>
        <a className="text-gray-500 transition hover:text-gray-500/75">
          Features
        </a>
      </li>

      <li>
        <a className="text-gray-500 transition hover:text-gray-500/75">
          Get the App
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
