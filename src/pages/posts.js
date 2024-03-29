import { h } from "preact";
import { Box } from "../components/index.js";

export default (props) => (
  <Box>
    <Box as="div" class="bg-header">
      Information
    </Box>
    <div class="shadow sm:rounded-lg">
      <ul class="list-disc space-y-2">
        {props.posts &&
          props.posts
            .filter((t) => !t.meta.draft)
            .sort((a, b) => {
              return Date.parse(a.meta.date) < Date.parse(b.meta.date) ? 1 : -1;
            })
            .map(({ meta }, index) => (
              <li
                key={index}
                class="flex items-start shadow overflow-hidden border-b text-primary-800"
              >
                <div class="flex items-center">
                  <a class="p-4" href={meta.slug}>
                    <Box as="span" class="text-primary-700 text-lg font-medium">
                      {meta.title}
                    </Box>
                  </a>
                </div>
              </li>
            ))}
      </ul>
    </div>
  </Box>
);
