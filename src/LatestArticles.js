const svgClock = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`

const defaultTitle = {
  "en-US": "Latest Articles",
  "zh-CN": "近期文章",
}

export default {
  name: "LastestArticles",
  props: {
    title: {
      type: String,
      default: defaultTitle["en-US"],
    },
    titleTag: {
      type: String,
      default: "h2",
    },
    number: {
      type: Number,
      default: 10,
    },
    prefix: {
      type: String,
      default: undefined
    }
  },
  render(h) {
    const pages = this.$site.pages
      .filter((a) => a.frontmatter?.publish !== false)
      .filter((a) => a.regularPath.startsWith(this.$page.regularPath))
      .filter((a) => {
        if(!this.prefix) {
          return true;
        } else {
          return a.regularPath.startsWith(this.prefix);
        }
      })
      .map((a) => ({ ...a, lastUpdated: new Date(a.lastUpdated) }))
      .reverse()
      .slice(0, this.number)
      .map((a) =>
        h("li", [
          h(
            "div",
            {
              style: {
                marginRight: "20px",
                display: "flex",
                justifyContent: "space-between",
              },
            },
            [
              h(
                "a",
                {
                  attrs: {
                    href: a.regularPath.startsWith("/")
                      ? a.regularPath.replace("/", this.$site.base)
                      : a.regularPath,
                  },
                },
                a.title
              ),
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    color: "rgba(0,0,0,.54)",
                    fontWeight: 200,
                  },
                },
                [
                  h("span", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      marginRight: "5px",
                    },
                    domProps: {
                      innerHTML: svgClock,
                    },
                  }),
                  h("span", a.lastUpdated.toLocaleDateString()),
                ]
              ),
            ]
          ),
        ])
      )

    return h("div", [
      h(
        this.titleTag,
        this.title === defaultTitle["en-US"]
          ? defaultTitle[this.$lang] ?? defaultTitle["en-US"]
          : a.title
      ),
      h("ul", pages),
    ])
  },
}
