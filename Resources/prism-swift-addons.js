Prism.languages.swift = Prism.languages.extend('clike', {

                                               'string': {

                                                    pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                                                    greedy: true,
                                                    inside: {
                                                        'interpolation': {
                                                            pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
                                                            inside: {
                                                                delimiter: {
                                                                    pattern: /^\\\(|\)$/,
                                                                    alias: 'variable'
                                                                }
                                                            }
                                                        }
                                                    }
                                                },

                                                'keyword': /\b(?:as|associativity|break|case|catch|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|switch|throws?|try|typealias|unowned|unsafe|var|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,

                                                'number': /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,

                                                'constant': /\b(?:nil|import|class|super|Type|weak|optional|public|override|IB(?:Outlet|Designable|Action|Inspectable)|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,

                                                'atrule': /@\b(?:class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,

                                                'builtin': /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
});
