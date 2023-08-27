const Page = () => {
  return (
    <div>
      <div className="text-3xl font-semibold pb-4">사용법</div>
      <div>
        privates.txt 파일을 만들어, 맥 파인더의 다운로드 폴더에 넣어주세요.{' '}
        <br />
        파일 안에 네이버 개발자 센터(https://developers.naver.com/) 에서
        발급받은 client_id와 client_secret을 넣어주세요 (10개까지 가능)
        <br />
        {/* <code className="block whitespace-pre overflow-x-scroll">
          &lbrack;&lbrace;&quot;client_id&quot; : &quot;&quot;,
          &quot;client_secret&quot; : &quot;&quot;, &rbrace;, &lbrace;
          &quot;client_id&quot; : &quot;&quot;, &quot;client_secret&quot; :
          &quot;&quot;, &rbrace;, ... &rbrack;
        </code> */}
      </div>
      <code>test</code>
    </div>
  );
};

export default Page;
