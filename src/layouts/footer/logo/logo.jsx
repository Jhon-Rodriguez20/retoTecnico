
function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'blue', width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px', clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }}></div>
      <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Logo</span>
    </div>
  );
}

export default Logo;
