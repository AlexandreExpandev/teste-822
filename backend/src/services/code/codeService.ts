import { getLanguageById, isLanguageSupported } from '../language/languageService';

/**
 * @summary
 * Generates Hello World code for the specified language
 * 
 * @param {string} language - The programming language identifier
 * @returns {Promise<string | null>} The generated code or null if language not supported
 */
export async function generateCode(language: string): Promise<string | null> {
  // Check if the language is supported
  const isSupported = await isLanguageSupported(language);
  if (!isSupported) {
    return null;
  }
  
  // Generate code based on language
  switch (language) {
    case 'javascript':
      return 'console.log("Hello, World!");';
      
    case 'typescript':
      return 'const message: string = "Hello, World!";\nconsole.log(message);';
      
    case 'python':
      return 'print("Hello, World!")';
      
    case 'java':
      return 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}';
      
    case 'csharp':
      return 'using System;\n\nnamespace HelloWorld\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Hello, World!");\n        }\n    }\n}';
      
    case 'cpp':
      return '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}';
      
    case 'php':
      return '<?php\necho "Hello, World!";\n?>';
      
    case 'ruby':
      return 'puts "Hello, World!"';
      
    case 'go':
      return 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}';
      
    case 'rust':
      return 'fn main() {\n    println!("Hello, World!");\n}';
      
    default:
      return null;
  }
}

/**
 * @summary
 * Gets the appropriate file extension for a programming language
 * 
 * @param {string} language - The programming language identifier
 * @returns {Promise<string>} The file extension for the language
 */
export async function getFileExtension(language: string): Promise<string> {
  const languageInfo = await getLanguageById(language);
  return languageInfo?.extension || 'txt';
}
