import { faCopy, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";

const PasswordGenenrator = () => {
  const [password, setPassword] = useState(null);
  //   const [copStatus, setCopyStatus] = useState(false);
  const passwordRef = useRef();
  const handleCopyPassword = () => {
    passwordRef.current.select();
    document.execCommand("copy");
    alert("Password coppied to clipbord");
  };
  //   +Zv6xZbjPq>r !Ir7Alˆ9#%O` ?Uk2gckZ'W:+ <Px0S.N$t?|< $Yl2lNyUpbw5
  // responsinator.com -> check the responsiveness of your site.
  // projects to build
  // quiz app, gallery app, ecommerce landing page,password generator app
  const handleGeneratePassword = () => {
    let newPassword = "";
    const passLength = 12;
    const passSymbols = "±!@#$%ˆ&*()_+?><,.:';[]{}`|";
    const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const digits = "1234567890";
    const allCharacters =
      passSymbols + upperCaseLetter + lowerCaseLetters + digits;
    newPassword += passSymbols[Math.floor(Math.random() * passSymbols.length)];
    newPassword +=
      upperCaseLetter[Math.floor(Math.random() * upperCaseLetter.length)];
    newPassword +=
      lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    newPassword += digits[Math.floor(Math.random() * digits.length)];
    while (passLength > newPassword.length) {
      newPassword +=
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    setPassword(newPassword);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10 bg-opacity-60 bg-slate-900">
      <FontAwesomeIcon
        icon={faLock}
        className="text-blue-400 animate-pulse size-16"
      />
      <h1 className="text-4xl text-center text-slate-200 font-extralight">
        Encrypt Information With A
        <span className="font-bold text-blue-400"> Strong Password!</span>
        {password && (
          <p
            title="Clik to copy Password to clipboard"
            onClick={handleCopyPassword}
            className="p-2 mt-10 font-normal bg-opacity-25 rounded-md cursor-pointer text-slate-200 bg-slate-100"
          >
            {password}
          </p>
        )}
      </h1>
      <section className="space-y-6 text-center">
        <div>
          <h3 className="text-2xl font-bold text-slate-200">Generate</h3>
          <p className="text-slate-400">Random Password</p>
        </div>
        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              className="w-full shadow-xs focus:ring-1 focus:ring-blue-400 outline-none text-base placeholder:text-sm px-5 h-[46px] rounded-[10px] border-none pr-14"
              placeholder="xxxxxxxxxxxx"
              value={password}
              ref={passwordRef}
              readOnly
              onChange={(e) => setPassword(e.target.value)}
            />
            {password && (
              <span
                onClick={handleCopyPassword}
                title="Copy Password to clipboard"
                className="absolute text-blue-500 cursor-pointer right-5 hover:text-blue-600 top-2/4 -translate-y-2/4"
              >
                <FontAwesomeIcon icon={faCopy} />
              </span>
            )}
          </div>
          <button
            onClick={handleGeneratePassword}
            className="flex items-center text-lg justify-center px-20 w-full py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 hover:bg-blue-600 rounded-lg h-[60px]"
          >
            Generate
          </button>
        </div>
      </section>

      {/* <p className="font-light text-green-700 text-md animate-pulse">
        Password coppied to clipbord
      </p> */}
    </div>
  );
};

export default PasswordGenenrator;
