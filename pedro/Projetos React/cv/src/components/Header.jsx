import React from "react";


function Header() {
  return (
    <table cellSpacing="20">
      <tr>
        <td>
            <img src="https://scontent.fbel17-1.fna.fbcdn.net/v/t1.6435-9/62070571_1569568956506792_613534489095700480_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=YFtzmKGxRmgAX9Av_FW&_nc_ht=scontent.fbel17-1.fna&oh=1775cb7da42f9f8c8b75cad76d7a1efb&oe=612F699E" alt="perfil-img"></img>
        </td>
        <td>
          <h1 className="header">Pedro Colares</h1>
          <p>Desenvolvedor Front-end</p>
        </td>
      </tr>
    </table>
  );
}

export default Header;
