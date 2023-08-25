var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

var pro = "#E8544E",
  experienced = "#FFD265",
  exposed = "#2AA775";

Highcharts.chart("container", {
  chart: {
    type: "networkgraph",
    marginTop: 80
  },

  title: {
    text: "My Experience with Languages, Frameworks, and other Technologies"
  },

  tooltip: {
    formatter: function () {
      var info = "";
      switch (this.color) {
        case pro:
          console.log(pro);
          info = "I'm proficient at it!";
          break;
        case experienced:
          console.log(experienced);
          info = "I have some experience with it!";
          break;
        case exposed:
          console.log(exposed);
          info = "I've used it!";
          break;
      }
      return "<b>" + this.key + "</b>: " + info;
    }
  },

  plotOptions: {
    networkgraph: {
      keys: ["from", "to"],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: "verlet",
        linkLength: 100
      }
    }
  },

  series: [
    {
      marker: {
        radius: 13
      },
      dataLabels: {
        enabled: true,
        linkFormat: "",
        allowOverlap: true,
        style: {
          textOutline: false
        }
      },
      data: [
        ["Python", "NumPy"],
        ["Python", "Pandas"],
        ["Python", "NLTK"],
        ["Python", "PyTorch"],
        ["Python", "Flask"],
        ["Python", "Matplotlib"],
        ["Python", "scikit-learn"],
        ["Python", "Git"],
        ["Python", "Shell"],

        ["Matlab", "Gurobi Optimizer"],
        ["Matlab", "Git"],


        ["Shell", "Git"],

        ["C/C++", "Git"],
        ["C/C++", "Shell"],


        ["Javascript", "HTML/CSS"],
        ["Javascript", "Git"],
        ["Javascript", "Shell"],
        ["Javascript", "React"],

        ["React", "Flask"],
        ["React", "Python"]





      ],
      nodes: [
        {
          id: "Python",
          marker: {
            radius: 30
          },
          color: pro

        },
        {
          id: "Matlab",
          marker: {
            radius: 30
          },
          color: pro
        },
        {
          id: "C/C++",
          marker: {
            radius: 30
          },
          color: pro
        },
        {
          id: "HTML/CSS",
          marker: {
            radius: 20
          },
          color: experienced
        },
        {
          id: "Javascript",
          marker: {
            radius: 20
          },
          color: experienced
        },
        {
          id: "Shell",
          marker: {
            radius: 20
          },
          color: experienced
        },
        {
          id: "Git",
          marker: {
            radius: 20
          },
          color: experienced
        },
        {
          id: "React",
          marker: {
            radius: 10
          },
          color: exposed
        },
        {
          id: "NumPy",
          marker: {
            radius: 10
          },
          color: exposed
        },
        {
          id: "Pandas",
          marker: {
            radius: 10
          },
          color: exposed
        },
        {
          id: "NLTK",
          marker: {
            radius: 10
          },
          color: exposed
        },
        {
          id: "PyTorch",
          marker: {
            radius: 10
          },
          color: exposed
        },
        {
        id: "Flask",
        marker: {
          radius: 10
        },
        color: exposed
        },

        {
          id: "Matplotlib",
          marker: {
            radius: 10
          },
          color: exposed
        },
        {
          id: "scikit-learn",
          marker: {
            radius: 10
          },
          color: exposed
        },
        {
          id: "Gurobi Optimizer",
          marker: {
            radius: 20
          },
          color: experienced
        }
      ]
    }
  ]
});