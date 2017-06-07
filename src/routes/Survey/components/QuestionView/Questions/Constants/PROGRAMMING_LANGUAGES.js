const PROGRAMMING_LANGUAGES = [

    {key: 'GAMS', value: 'GAMS', text: 'GAMS'},

    {key: 'C#', value: 'C#', text: 'C#'},

    {key: 'Ioke', value: 'Ioke', text: 'Ioke'},

    {key: 'Inform 7', value: 'Inform 7', text: 'Inform 7'},

    {key: 'Vala', value: 'Vala', text: 'Vala'},

    {key: 'Opa', value: 'Opa', text: 'Opa'},

    {key: 'ATS', value: 'ATS', text: 'ATS'},

    {key: 'Kotlin', value: 'Kotlin', text: 'Kotlin'},

    {key: 'AutoHotkey', value: 'AutoHotkey', text: 'AutoHotkey'},

    {key: 'Idris', value: 'Idris', text: 'Idris'},

    {key: 'Volt', value: 'Volt', text: 'Volt'},

    {key: 'RenderScript', value: 'RenderScript', text: 'RenderScript'},

    {key: 'ActionScript', value: 'ActionScript', text: 'ActionScript'},

    {key: 'Hack', value: 'Hack', text: 'Hack'},

    {key: 'Cap\'n Proto', value: 'Cap\'n Proto', text: 'Cap\'n Proto'},

    {key: 'DTrace', value: 'DTrace', text: 'DTrace'},

    {key: 'Apex', value: 'Apex', text: 'Apex'},

    {key: 'Boo', value: 'Boo', text: 'Boo'},

    {key: 'Game Maker Language', value: 'Game Maker Language', text: 'Game Maker Language'},

    {key: 'Standard ML', value: 'Standard ML', text: 'Standard ML'},

    {key: 'Java', value: 'Java', text: 'Java'},

    {key: 'Literate Haskell', value: 'Literate Haskell', text: 'Literate Haskell'},

    {key: 'UnrealScript', value: 'UnrealScript', text: 'UnrealScript'},

    {key: 'C', value: 'C', text: 'C'},

    {key: 'C++', value: 'C++', text: 'C++'},

    {key: 'Harbour', value: 'Harbour', text: 'Harbour'},

    {key: 'XSLT', value: 'XSLT', text: 'XSLT'},

    {key: 'CSS', value: 'CSS', text: 'CSS'},

    {key: 'PureScript', value: 'PureScript', text: 'PureScript'},

    {key: 'Filterscript', value: 'Filterscript', text: 'Filterscript'},

    {key: 'ooc', value: 'ooc', text: 'ooc'},

    {key: 'CLIPS', value: 'CLIPS', text: 'CLIPS'},

    {key: 'Agda', value: 'Agda', text: 'Agda'},

    {key: 'SourcePawn', value: 'SourcePawn', text: 'SourcePawn'},

    {key: 'JFlex', value: 'JFlex', text: 'JFlex'},

    {key: 'Inno Setup', value: 'Inno Setup', text: 'Inno Setup'},

    {key: 'Rust', value: 'Rust', text: 'Rust'},

    {key: 'D', value: 'D', text: 'D'},

    {key: 'Groff', value: 'Groff', text: 'Groff'},

    {key: 'Dylan', value: 'Dylan', text: 'Dylan'},

    {key: 'Smali', value: 'Smali', text: 'Smali'},

    {key: 'Tcsh', value: 'Tcsh', text: 'Tcsh'},

    {key: 'Max', value: 'Max', text: 'Max'},

    {key: 'Mathematica', value: 'Mathematica', text: 'Mathematica'},

    {key: 'Eagle', value: 'Eagle', text: 'Eagle'},

    {key: 'Clojure', value: 'Clojure', text: 'Clojure'},

    {key: 'RUNOFF', value: 'RUNOFF', text: 'RUNOFF'},

    {key: 'NetLinx', value: 'NetLinx', text: 'NetLinx'},

    {key: 'Genshi', value: 'Genshi', text: 'Genshi'},

    {key: 'Augeas', value: 'Augeas', text: 'Augeas'},

    {key: 'E', value: 'E', text: 'E'},

    {key: 'Brightscript', value: 'Brightscript', text: 'Brightscript'},

    {key: 'AppleScript', value: 'AppleScript', text: 'AppleScript'},

    {key: 'Gentoo Ebuild', value: 'Gentoo Ebuild', text: 'Gentoo Ebuild'},

    {key: 'TypeScript', value: 'TypeScript', text: 'TypeScript'},

    {key: 'Coq', value: 'Coq', text: 'Coq'},

    {key: 'Scheme', value: 'Scheme', text: 'Scheme'},

    {key: 'Java Server Pages', value: 'Java Server Pages', text: 'Java Server Pages'},

    {key: 'Oxygene', value: 'Oxygene', text: 'Oxygene'},

    {key: 'GDB', value: 'GDB', text: 'GDB'},

    {key: 'LSL', value: 'LSL', text: 'LSL'},

    {key: 'KRL', value: 'KRL', text: 'KRL'},

    {key: 'SAS', value: 'SAS', text: 'SAS'},

    {key: 'Parrot Internal Representation', value: 'Parrot Internal Representation', text: 'Parrot Internal Representation'},

    {key: 'BitBake', value: 'BitBake', text: 'BitBake'},

    {key: 'Elm', value: 'Elm', text: 'Elm'},

    {key: 'Scala', value: 'Scala', text: 'Scala'},

    {key: 'Io', value: 'Io', text: 'Io'},

    {key: 'Vue', value: 'Vue', text: 'Vue'},

    {key: 'MTML', value: 'MTML', text: 'MTML'},

    {key: 'Haxe', value: 'Haxe', text: 'Haxe'},

    {key: 'Racket', value: 'Racket', text: 'Racket'},

    {key: 'FreeMarker', value: 'FreeMarker', text: 'FreeMarker'},

    {key: 'Assembly', value: 'Assembly', text: 'Assembly'},

    {key: 'ShellSession', value: 'ShellSession', text: 'ShellSession'},

    {key: 'Lean', value: 'Lean', text: 'Lean'},

    {key: 'Cucumber', value: 'Cucumber', text: 'Cucumber'},

    {key: 'SRecode Template', value: 'SRecode Template', text: 'SRecode Template'},

    {key: 'M4', value: 'M4', text: 'M4'},

    {key: 'Nu', value: 'Nu', text: 'Nu'},

    {key: 'nesC', value: 'nesC', text: 'nesC'},

    {key: 'ECLiPSe', value: 'ECLiPSe', text: 'ECLiPSe'},

    {key: 'Metal', value: 'Metal', text: 'Metal'},

    {key: 'Perl6', value: 'Perl6', text: 'Perl6'},

    {key: 'TeX', value: 'TeX', text: 'TeX'},

    {key: 'Logos', value: 'Logos', text: 'Logos'},

    {key: 'GDScript', value: 'GDScript', text: 'GDScript'},

    {key: 'Arduino', value: 'Arduino', text: 'Arduino'},

    {key: 'ColdFusion', value: 'ColdFusion', text: 'ColdFusion'},

    {key: 'ColdFusion CFC', value: 'ColdFusion CFC', text: 'ColdFusion CFC'},

    {key: 'PAWN', value: 'PAWN', text: 'PAWN'},

    {key: 'NetLogo', value: 'NetLogo', text: 'NetLogo'},

    {key: 'Go', value: 'Go', text: 'Go'},

    {key: 'Handlebars', value: 'Handlebars', text: 'Handlebars'},

    {key: 'KiCad', value: 'KiCad', text: 'KiCad'},

    {key: 'Click', value: 'Click', text: 'Click'},

    {key: 'Yacc', value: 'Yacc', text: 'Yacc'},

    {key: 'SQF', value: 'SQF', text: 'SQF'},

    {key: 'TXL', value: 'TXL', text: 'TXL'},

    {key: 'Cycript', value: 'Cycript', text: 'Cycript'},

    {key: 'AMPL', value: 'AMPL', text: 'AMPL'},

    {key: 'Literate CoffeeScript', value: 'Literate CoffeeScript', text: 'Literate CoffeeScript'},

    {key: 'DM', value: 'DM', text: 'DM'},

    {key: 'TLA', value: 'TLA', text: 'TLA'},

    {key: 'Cython', value: 'Cython', text: 'Cython'},

    {key: 'FLUX', value: 'FLUX', text: 'FLUX'},

    {key: 'Ox', value: 'Ox', text: 'Ox'},

    {key: 'Clean', value: 'Clean', text: 'Clean'},

    {key: 'Fancy', value: 'Fancy', text: 'Fancy'},

    {key: 'BlitzBasic', value: 'BlitzBasic', text: 'BlitzBasic'},

    {key: 'Cool', value: 'Cool', text: 'Cool'},

    {key: 'xBase', value: 'xBase', text: 'xBase'},

    {key: 'Pony', value: 'Pony', text: 'Pony'},

    {key: 'SQLPL', value: 'SQLPL', text: 'SQLPL'},

    {key: 'Filebench WML', value: 'Filebench WML', text: 'Filebench WML'},

    {key: 'J', value: 'J', text: 'J'},

    {key: 'Makefile', value: 'Makefile', text: 'Makefile'},

    {key: 'Gosu', value: 'Gosu', text: 'Gosu'},

    {key: 'GCC Machine Description', value: 'GCC Machine Description', text: 'GCC Machine Description'},

    {key: 'Eiffel', value: 'Eiffel', text: 'Eiffel'},

    {key: 'PowerShell', value: 'PowerShell', text: 'PowerShell'},

    {key: 'Golo', value: 'Golo', text: 'Golo'},

    {key: 'PostScript', value: 'PostScript', text: 'PostScript'},

    {key: 'Isabelle', value: 'Isabelle', text: 'Isabelle'},

    {key: 'mupad', value: 'mupad', text: 'mupad'},

    {key: 'Oz', value: 'Oz', text: 'Oz'},

    {key: 'LFE', value: 'LFE', text: 'LFE'},

    {key: 'XC', value: 'XC', text: 'XC'},

    {key: 'Alloy', value: 'Alloy', text: 'Alloy'},

    {key: 'HTML', value: 'HTML', text: 'HTML'},

    {key: 'Bison', value: 'Bison', text: 'Bison'},

    {key: 'Pascal', value: 'Pascal', text: 'Pascal'},

    {key: 'EQ', value: 'EQ', text: 'EQ'},

    {key: 'Glyph', value: 'Glyph', text: 'Glyph'},

    {key: 'Omgrofl', value: 'Omgrofl', text: 'Omgrofl'},

    {key: 'Opal', value: 'Opal', text: 'Opal'},

    {key: 'Grammatical Framework', value: 'Grammatical Framework', text: 'Grammatical Framework'},

    {key: 'XPages', value: 'XPages', text: 'XPages'},

    {key: 'Rebol', value: 'Rebol', text: 'Rebol'},

    {key: 'Csound', value: 'Csound', text: 'Csound'},

    {key: 'LoomScript', value: 'LoomScript', text: 'LoomScript'},

    {key: 'Zephir', value: 'Zephir', text: 'Zephir'},

    {key: 'Mask', value: 'Mask', text: 'Mask'},

    {key: 'MoonScript', value: 'MoonScript', text: 'MoonScript'},

    {key: 'OCaml', value: 'OCaml', text: 'OCaml'},

    {key: 'Self', value: 'Self', text: 'Self'},

    {key: 'Sage', value: 'Sage', text: 'Sage'},

    {key: 'M', value: 'M', text: 'M'},

    {key: 'Matlab', value: 'Matlab', text: 'Matlab'},

    {key: 'Stata', value: 'Stata', text: 'Stata'},

    {key: 'Brainfuck', value: 'Brainfuck', text: 'Brainfuck'},

    {key: 'ANTLR', value: 'ANTLR', text: 'ANTLR'},

    {key: 'JavaScript', value: 'JavaScript', text: 'JavaScript'},

    {key: 'Modula-2', value: 'Modula-2', text: 'Modula-2'},

    {key: 'MiniD', value: 'MiniD', text: 'MiniD'},

    {key: 'API Blueprint', value: 'API Blueprint', text: 'API Blueprint'},

    {key: 'RAML', value: 'RAML', text: 'RAML'},

    {key: 'Groovy', value: 'Groovy', text: 'Groovy'},

    {key: 'EJS', value: 'EJS', text: 'EJS'},

    {key: 'C2hs Haskell', value: 'C2hs Haskell', text: 'C2hs Haskell'},

    {key: 'Sass', value: 'Sass', text: 'Sass'},

    {key: 'IGOR Pro', value: 'IGOR Pro', text: 'IGOR Pro'},

    {key: 'Jupyter Notebook', value: 'Jupyter Notebook', text: 'Jupyter Notebook'},

    {key: 'NetLinx+ERB', value: 'NetLinx+ERB', text: 'NetLinx+ERB'},

    {key: 'Stan', value: 'Stan', text: 'Stan'},

    {key: 'Clarion', value: 'Clarion', text: 'Clarion'},

    {key: 'Visual Basic', value: 'Visual Basic', text: 'Visual Basic'},

    {key: 'ECL', value: 'ECL', text: 'ECL'},

    {key: 'XProc', value: 'XProc', text: 'XProc'},

    {key: 'NumPy', value: 'NumPy', text: 'NumPy'},

    {key: 'JSX', value: 'JSX', text: 'JSX'},

    {key: 'Csound Document', value: 'Csound Document', text: 'Csound Document'},

    {key: 'SuperCollider', value: 'SuperCollider', text: 'SuperCollider'},

    {key: 'Cuda', value: 'Cuda', text: 'Cuda'},

    {key: 'Objective-C', value: 'Objective-C', text: 'Objective-C'},

    {key: 'wisp', value: 'wisp', text: 'wisp'},

    {key: 'Component Pascal', value: 'Component Pascal', text: 'Component Pascal'},

    {key: 'Factor', value: 'Factor', text: 'Factor'},

    {key: 'POV-Ray SDL', value: 'POV-Ray SDL', text: 'POV-Ray SDL'},

    {key: 'Common Lisp', value: 'Common Lisp', text: 'Common Lisp'},

    {key: 'NSIS', value: 'NSIS', text: 'NSIS'},

    {key: 'Objective-C++', value: 'Objective-C++', text: 'Objective-C++'},

    {key: 'Gnuplot', value: 'Gnuplot', text: 'Gnuplot'},

    {key: '1C Enterprise', value: '1C Enterprise', text: '1C Enterprise'},

    {key: 'Perl', value: 'Perl', text: 'Perl'},

    {key: 'SystemVerilog', value: 'SystemVerilog', text: 'SystemVerilog'},

    {key: 'MAXScript', value: 'MAXScript', text: 'MAXScript'},

    {key: 'Gentoo Eclass', value: 'Gentoo Eclass', text: 'Gentoo Eclass'},

    {key: 'Cirru', value: 'Cirru', text: 'Cirru'},

    {key: 'M4Sugar', value: 'M4Sugar', text: 'M4Sugar'},

    {key: 'ABAP', value: 'ABAP', text: 'ABAP'},

    {key: 'JSONiq', value: 'JSONiq', text: 'JSONiq'},

    {key: 'Latte', value: 'Latte', text: 'Latte'},

    {key: 'SCSS', value: 'SCSS', text: 'SCSS'},

    {key: 'Parrot Assembly', value: 'Parrot Assembly', text: 'Parrot Assembly'},

    {key: 'REALbasic', value: 'REALbasic', text: 'REALbasic'},

    {key: 'QML', value: 'QML', text: 'QML'},

    {key: 'Logtalk', value: 'Logtalk', text: 'Logtalk'},

    {key: 'Terra', value: 'Terra', text: 'Terra'},

    {key: 'Shell', value: 'Shell', text: 'Shell'},

    {key: 'HyPhy', value: 'HyPhy', text: 'HyPhy'},

    {key: 'XQuery', value: 'XQuery', text: 'XQuery'},

    {key: 'Smarty', value: 'Smarty', text: 'Smarty'},

    {key: 'Turing', value: 'Turing', text: 'Turing'},

    {key: 'Red', value: 'Red', text: 'Red'},

    {key: 'CMake', value: 'CMake', text: 'CMake'},

    {key: 'Hy', value: 'Hy', text: 'Hy'},

    {key: 'IDL', value: 'IDL', text: 'IDL'},

    {key: 'HCL', value: 'HCL', text: 'HCL'},

    {key: 'OpenRC runscript', value: 'OpenRC runscript', text: 'OpenRC runscript'},

    {key: 'Emacs Lisp', value: 'Emacs Lisp', text: 'Emacs Lisp'},

    {key: 'R', value: 'R', text: 'R'},

    {key: 'LabVIEW', value: 'LabVIEW', text: 'LabVIEW'},

    {key: 'Apollo Guidance Computer', value: 'Apollo Guidance Computer', text: 'Apollo Guidance Computer'},

    {key: 'Arc', value: 'Arc', text: 'Arc'},

    {key: 'PLSQL', value: 'PLSQL', text: 'PLSQL'},

    {key: 'Alpine Abuild', value: 'Alpine Abuild', text: 'Alpine Abuild'},

    {key: 'EmberScript', value: 'EmberScript', text: 'EmberScript'},

    {key: 'AspectJ', value: 'AspectJ', text: 'AspectJ'},

    {key: 'Myghty', value: 'Myghty', text: 'Myghty'},

    {key: 'PogoScript', value: 'PogoScript', text: 'PogoScript'},

    {key: 'VimL', value: 'VimL', text: 'VimL'},

    {key: 'SaltStack', value: 'SaltStack', text: 'SaltStack'},

    {key: 'Pure Data', value: 'Pure Data', text: 'Pure Data'},

    {key: 'OpenEdge ABL', value: 'OpenEdge ABL', text: 'OpenEdge ABL'},

    {key: 'OpenCL', value: 'OpenCL', text: 'OpenCL'},

    {key: 'REXX', value: 'REXX', text: 'REXX'},

    {key: 'Pike', value: 'Pike', text: 'Pike'},

    {key: 'COBOL', value: 'COBOL', text: 'COBOL'},

    {key: 'Swift', value: 'Swift', text: 'Swift'},

    {key: 'Smalltalk', value: 'Smalltalk', text: 'Smalltalk'},

    {key: 'Mercury', value: 'Mercury', text: 'Mercury'},

    {key: 'Processing', value: 'Processing', text: 'Processing'},

    {key: 'Propeller Spin', value: 'Propeller Spin', text: 'Propeller Spin'},

    {key: 'Monkey', value: 'Monkey', text: 'Monkey'},

    {key: 'Dogescript', value: 'Dogescript', text: 'Dogescript'},

    {key: 'Haskell', value: 'Haskell', text: 'Haskell'},

    {key: 'Puppet', value: 'Puppet', text: 'Puppet'},

    {key: 'CartoCSS', value: 'CartoCSS', text: 'CartoCSS'},

    {key: 'RobotFramework', value: 'RobotFramework', text: 'RobotFramework'},

    {key: 'Ragel in Ruby Host', value: 'Ragel in Ruby Host', text: 'Ragel in Ruby Host'},

    {key: 'Scilab', value: 'Scilab', text: 'Scilab'},

    {key: 'FORTRAN', value: 'FORTRAN', text: 'FORTRAN'},

    {key: 'Ceylon', value: 'Ceylon', text: 'Ceylon'},

    {key: 'Literate Agda', value: 'Literate Agda', text: 'Literate Agda'},

    {key: 'DIGITAL Command Language', value: 'DIGITAL Command Language', text: 'DIGITAL Command Language'},

    {key: 'Ren\'Py', value: 'Ren\'Py', text: 'Ren\'Py'},

    {key: 'Nimrod', value: 'Nimrod', text: 'Nimrod'},

    {key: 'Awk', value: 'Awk', text: 'Awk'},

    {key: 'Bluespec', value: 'Bluespec', text: 'Bluespec'},

    {key: 'Papyrus', value: 'Papyrus', text: 'Papyrus'},

    {key: 'LOLCODE', value: 'LOLCODE', text: 'LOLCODE'},

    {key: 'Rouge', value: 'Rouge', text: 'Rouge'},

    {key: 'Objective-J', value: 'Objective-J', text: 'Objective-J'},

    {key: 'Uno', value: 'Uno', text: 'Uno'},

    {key: 'Parrot', value: 'Parrot', text: 'Parrot'},

    {key: 'PigLatin', value: 'PigLatin', text: 'PigLatin'},

    {key: 'GAP', value: 'GAP', text: 'GAP'},

    {key: 'Jasmin', value: 'Jasmin', text: 'Jasmin'},

    {key: 'PowerBuilder', value: 'PowerBuilder', text: 'PowerBuilder'},

    {key: 'Crystal', value: 'Crystal', text: 'Crystal'},

    {key: 'Batchfile', value: 'Batchfile', text: 'Batchfile'},

    {key: 'PureBasic', value: 'PureBasic', text: 'PureBasic'},

    {key: 'LLVM', value: 'LLVM', text: 'LLVM'},

    {key: 'X10', value: 'X10', text: 'X10'},

    {key: 'LiveScript', value: 'LiveScript', text: 'LiveScript'},

    {key: 'NCL', value: 'NCL', text: 'NCL'},

    {key: 'Prolog', value: 'Prolog', text: 'Prolog'},

    {key: 'Isabelle ROOT', value: 'Isabelle ROOT', text: 'Isabelle ROOT'},

    {key: 'UrWeb', value: 'UrWeb', text: 'UrWeb'},

    {key: 'Frege', value: 'Frege', text: 'Frege'},

    {key: 'CoffeeScript', value: 'CoffeeScript', text: 'CoffeeScript'},

    {key: 'Module Management System', value: 'Module Management System', text: 'Module Management System'},

    {key: 'Haml', value: 'Haml', text: 'Haml'},

    {key: 'ChucK', value: 'ChucK', text: 'ChucK'},

    {key: 'PHP', value: 'PHP', text: 'PHP'},

    {key: 'Charity', value: 'Charity', text: 'Charity'},

    {key: 'Mako', value: 'Mako', text: 'Mako'},

    {key: 'fish', value: 'fish', text: 'fish'},

    {key: 'Grace', value: 'Grace', text: 'Grace'},

    {key: 'Lua', value: 'Lua', text: 'Lua'},

    {key: 'Unified Parallel C', value: 'Unified Parallel C', text: 'Unified Parallel C'},

    {key: 'Julia', value: 'Julia', text: 'Julia'},

    {key: 'Less', value: 'Less', text: 'Less'},

    {key: 'Thrift', value: 'Thrift', text: 'Thrift'},

    {key: 'Nit', value: 'Nit', text: 'Nit'},

    {key: 'GAS', value: 'GAS', text: 'GAS'},

    {key: 'Groovy Server Pages', value: 'Groovy Server Pages', text: 'Groovy Server Pages'},

    {key: 'Squirrel', value: 'Squirrel', text: 'Squirrel'},

    {key: 'Befunge', value: 'Befunge', text: 'Befunge'},

    {key: 'Lasso', value: 'Lasso', text: 'Lasso'},

    {key: 'SMT', value: 'SMT', text: 'SMT'},

    {key: 'Zimpl', value: 'Zimpl', text: 'Zimpl'},

    {key: 'Ruby', value: 'Ruby', text: 'Ruby'},

    {key: 'NewLisp', value: 'NewLisp', text: 'NewLisp'},

    {key: 'Moocode', value: 'Moocode', text: 'Moocode'},

    {key: 'VHDL', value: 'VHDL', text: 'VHDL'},

    {key: 'AutoIt', value: 'AutoIt', text: 'AutoIt'},

    {key: 'Nginx', value: 'Nginx', text: 'Nginx'},

    {key: 'Erlang', value: 'Erlang', text: 'Erlang'},

    {key: 'XS', value: 'XS', text: 'XS'},

    {key: 'Chapel', value: 'Chapel', text: 'Chapel'},

    {key: 'PLpgSQL', value: 'PLpgSQL', text: 'PLpgSQL'},

    {key: 'Python', value: 'Python', text: 'Python'},

    {key: 'Nemerle', value: 'Nemerle', text: 'Nemerle'},

    {key: 'Xojo', value: 'Xojo', text: 'Xojo'},

    {key: 'Pan', value: 'Pan', text: 'Pan'},

    {key: 'F#', value: 'F#', text: 'F#'},

    {key: 'Mirah', value: 'Mirah', text: 'Mirah'},

    {key: 'Forth', value: 'Forth', text: 'Forth'},

    {key: 'Web Ontology Language', value: 'Web Ontology Language', text: 'Web Ontology Language'},

    {key: 'Slash', value: 'Slash', text: 'Slash'},

    {key: 'Slim', value: 'Slim', text: 'Slim'},

    {key: 'Nix', value: 'Nix', text: 'Nix'},

    {key: 'APL', value: 'APL', text: 'APL'},

    {key: 'HLSL', value: 'HLSL', text: 'HLSL'},

    {key: 'Limbo', value: 'Limbo', text: 'Limbo'},

    {key: 'WebIDL', value: 'WebIDL', text: 'WebIDL'},

    {key: 'Tcl', value: 'Tcl', text: 'Tcl'},

    {key: 'OpenSCAD', value: 'OpenSCAD', text: 'OpenSCAD'},

    {key: 'Verilog', value: 'Verilog', text: 'Verilog'},

    {key: 'Ada', value: 'Ada', text: 'Ada'},

    {key: 'eC', value: 'eC', text: 'eC'},

    {key: 'LookML', value: 'LookML', text: 'LookML'},

    {key: 'Shen', value: 'Shen', text: 'Shen'},

    {key: 'Redcode', value: 'Redcode', text: 'Redcode'},

    {key: 'GLSL', value: 'GLSL', text: 'GLSL'},

    {key: 'ASP', value: 'ASP', text: 'ASP'},

    {key: 'Modelica', value: 'Modelica', text: 'Modelica'},

    {key: 'AGS Script', value: 'AGS Script', text: 'AGS Script'},

    {key: 'MUF', value: 'MUF', text: 'MUF'},

    {key: 'Csound Score', value: 'Csound Score', text: 'Csound Score'},

    {key: 'Xtend', value: 'Xtend', text: 'Xtend'},

    {key: 'ASN.1', value: 'ASN.1', text: 'ASN.1'},

    {key: 'Fantom', value: 'Fantom', text: 'Fantom'},

    {key: 'QMake', value: 'QMake', text: 'QMake'},

    {key: 'Bro', value: 'Bro', text: 'Bro'},

    {key: 'Lex', value: 'Lex', text: 'Lex'},

    {key: 'PicoLisp', value: 'PicoLisp', text: 'PicoLisp'},

    {key: 'LilyPond', value: 'LilyPond', text: 'LilyPond'},

    {key: 'BlitzMax', value: 'BlitzMax', text: 'BlitzMax'},

    {key: 'VCL', value: 'VCL', text: 'VCL'},

    {key: 'Dart', value: 'Dart', text: 'Dart'},

    {key: 'Elixir', value: 'Elixir', text: 'Elixir'},

];

export default PROGRAMMING_LANGUAGES;
