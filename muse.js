const muse = createMuse({ bpm: 120, type: "square" });

muse.play`
  [ e5 ; g5 ; a5 ; g5 ; e5 ; d5 ; b4 ; ] x 2
  [ c5 ; e5 ; g5 ; e5 ; c5 ; b4 ; a4 ; ] x 2
`;

muse.play`
  [ c3 ; g3 ; a3 ; f3 ; ] x 4
`;

muse.play`
  [ e4 ; g4 ; c5 ; g4 ; e4 ; d4 ; b3 ; ] x 2
  [ c4 ; e4 ; g4 ; e4 ; c4 ; b3 ; a3 ; ] x 2
`;
