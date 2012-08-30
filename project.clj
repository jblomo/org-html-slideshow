(defproject org-html-slides "0.0.1-SNAPSHOT"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.4.0-alpha5"]]
  :library-path "lib/jars"
  :source-paths ["src/clj" "src/cljs" "lib/domina/src/cljs" "lib/one/src/lib/cljs"]
  :plugins [[lein-cljsbuild "0.2.7"]]
  :cljsbuild {:builds [{:source-path "src/cljs"
                        :compiler {:output-to "production/org-html-slideshow.js"
                                   :optimizations :advanced}}
                       {:source-path "src/cljs"
                        :compiler {:output-to "out/development/org-html-slideshow.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]})
