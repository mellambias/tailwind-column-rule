const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ matchUtilities, addUtilities, theme, e }) {
  // valores arbitrarios
  const rule = {
    "rule-w": (valor) => ({
      columnRuleWidth: valor,
    }),
    "rule-color": (valor) => ({
      columnRuleColor: valor,
    }),
  };

  matchUtilities(rule);

  function setRule(values, className, cssRule) {
    const utilidad = Object.keys(values).reduce((result, key) => {
      if (key == "DEFAULT") {
        return {
          ...result,
          [`.${className}`]: {
            [`${cssRule}`]: values[key],
          },
        };
      }
      return {
        ...result,
        [`.${className}-${e(key)}`]: {
          [`${cssRule}`]: values[key],
        },
      };
    }, {});
    addUtilities(utilidad);
  }

  // Utilidades para establecer el ancho
  setRule(
    { ...theme("borderWidth"), ...theme("ruleWidth") },
    "rule-w",
    "column-rule-width"
  );

  //Utilidades para establecer el estilo
  const styles = ["solid", "dashed", "dotted", "double", "hidden", "none"];
  const ruleStyle = {};

  styles.forEach((value) => {
    ruleStyle[value] = value;
  });

  setRule(
    { ...ruleStyle, ...theme("ruleStyle") },
    "rule-style",
    "column-rule-style"
  );

  // Utilidades para establecer el color

  const colors = { ...theme("colors"), ...theme("ruleColor") };

  const ruleColors = Object.keys(colors).reduce((result, key) => {
    if (typeof colors[key] === "string") {
      return {
        ...result,
        [`.rule-color-${e(key)}`]: {
          "column-rule-color": colors[key],
        },
      };
    }

    const colorShades = Object.keys(colors[key]);

    return {
      ...result,
      ...colorShades.reduce(
        (a, shade) => ({
          ...a,
          [`.rule-color-${e(key)}-${shade}`]: {
            "column-rule-color": colors[key][shade],
          },
        }),
        {}
      ),
    };
  }, {});

  addUtilities(ruleColors);
}, {});
