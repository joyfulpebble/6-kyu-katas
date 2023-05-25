/*
  This series of katas will introduce you to basics of doing geometry with computers.

  Point objects have x, y attributes. Triangle objects have attributes a, b, c describing their corners, each of them is a Point.

  Write a function calculating area of a Triangle defined this way.

  Tests round answers to 6 decimal places.
*/

function triangleArea(triangle) {
  const A = triangle.a;
  const B = triangle.b;
  const C = triangle.c;
  
  const AB = Math.sqrt( (B.x - A.x)**2 + (B.y - A.y)**2 );
  const AC = Math.sqrt( (C.x - A.x)**2 + (C.y - A.y)**2 );
  const CB = Math.sqrt( (B.x - C.x)**2 + (B.y - C.y)**2 );
  
  const p = (AB + AC + CB) / 2;
  const S = Math.sqrt( p * (p - AB) * (p - AC) * (p - CB) );
  
  return S;
}