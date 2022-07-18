const isPro = process.env.NODE_ENV === "development"

const getEntryByEnv = (url, proUrl) => isPro ? url : proUrl

let apps = [
    {
        name: 'child-vue',
        entry: getEntryByEnv('//localhost:8081', 'http://localhost:8088/'),
        container: '#container',
        activeRule: '#/child1/',
      },
]

export {
    apps
}