function funWithAnagrams(text: string[]): string[] {
  const dp = new Array(text.length).fill(new Map());

  for (let i = 0; i < text.length; i++) {
    for (const char of text[i]) {
      dp[i].set(char, (dp[i].get(char) ?? 0) + 1);
    }
  }

  const result = [...text];

  for (let i = 1; i < text.length; i++) {
    for (let j = 0; j < i; j++) {
      const iWord = text[i];
      const jWord = text[j];

      // check to see if Iword is anagram of jWord
      if (jWord.length !== iWord.length) continue;
      let count = 0;
      const jChars = new Map(dp[j]);
      for (const char of iWord) {
        if (jChars.has(char)) {
          const remaining = jChars
            .set(char, (jChars.get(char) as number) - 1)
            .get(char);
          if (remaining > 0) {
            count++;
          }
        } else {
          break;
        }
      }
      console.log({ r: count === jWord.length, jWord, i });
      if (count === jWord.length) {
        result[i] = null;
      }
    }
  }
  return result.filter((res) => Boolean(res));
}
console.log(funWithAnagrams(["poke", "pkoe", "okpe", "ekop"]));
