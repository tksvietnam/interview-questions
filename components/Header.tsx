import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <Link href={"/"} passHref>
          <h2>Interview Questions</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
