(defproject org-html-slides "0.0.2-SNAPSHOT"
  :description "Present org-mode generated HTML as slides"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [domina "1.0.0"]]
  :library-path "lib/jars"
  :source-paths ["src/clj" "src/cljs" "lib/domina/src/cljs" "lib/one/src/lib/cljs"]
  :plugins [[lein-cljsbuild "0.3.2"]]
  :cljsbuild {:builds
              [{:source-paths ["src/cljs"],
                :compiler {:output-to "production/org-html-slideshow.js",
                           :optimizations :advanced
                           :pretty-print false}}
               {:source-paths ["src/cljs"],
                :compiler {:pretty-print true,
                           :output-to "out/development/org-html-slideshow.js",
                           :optimizations :whitespace}}]})
