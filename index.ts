import { $ } from "bun";

for (let i = 1; i <= 2000; i++) {
  await $`dd if=/dev/urandom of=bigfile${i}.txt bs=1M count=1`;
}
