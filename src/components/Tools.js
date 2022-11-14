import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import Bookings from "./Bookings";

export default function Tools() {
  const [tasks, setTasks] = React.useState(true);
  const [upcoming, setUpcoming] = React.useState(true);

  let bg;
  let bg2;
  bg = "#4940AA";
  bg2 = "#59595B";
  if (tasks) {
    bg = "#4940AA";
    bg2 = "#59595B";
  } else {
    bg = "#59595B";
    bg2 = "#4940AA";
  }
  let bg3;
  let bg4;

  if (upcoming) {
    bg3 = "#4940AA";
    bg4 = "#59595B";
  } else {
    bg3 = "#59595B";
    bg4 = "#4940AA";
  }

  let infotext = "#B82606";
  let infotext2 = "#1A0B07";
  return (
    <View style={styles.container}>
      <View style={styles.topnav}>
        <Text style={styles.toolstxt}>Tools</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setTasks(!tasks);
          }}
          style={{
            height: 25,
            width: 310,
            overflow: "hidden",
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 25,
              width: 150,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: bg,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Tasks
            </Text>
          </View>
          <View
            style={{
              height: 25,
              width: 150,
              backgroundColor: bg2,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Records
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {tasks ? (
        <>
          {/* Tasks start */}
          <View style={{}}>
            <View>
              <Text style={{ fontSize: 17, fontWeight: "bold", color: bg }}>
                Contracts in progress
              </Text>
            </View>
            <Bookings />
          </View>

          {/* Progress tasks */}

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setUpcoming(!upcoming);
              }}
              style={{
                height: 25,
                width: 310,
                overflow: "hidden",
                borderRadius: 20,
                backgroundColor: "#59595B",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 25,
                  width: 150,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: bg3,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  Upcoming
                </Text>
              </View>
              <View
                style={{
                  height: 25,
                  width: 150,
                  backgroundColor: bg4,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  Complete
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Upcoming */}
          {upcoming ? (
            <>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <ScrollView
                  contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: 10,
                  }}
                  style={{ width: "100%", height: "40%" }}
                  showsVerticalScrollIndicator={false}
                >
                  {/* Begin upcoming list */}
                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        March
                      </Text>
                      <Text style={{ color: infotext }}>28th</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "70%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Contract title
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Site Evaluation
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Month
                      </Text>
                      <Text style={{ color: infotext }}>Date</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "70%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Contract title
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Active task
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Month
                      </Text>
                      <Text style={{ color: infotext }}>Date</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "70%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Contract title
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Active task
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Month
                      </Text>
                      <Text style={{ color: infotext }}>Date</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "70%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Contract title
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Active task
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Month
                      </Text>
                      <Text style={{ color: infotext }}>Date</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "70%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Contract title
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Active task
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Month
                      </Text>
                      <Text style={{ color: infotext }}>Date</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "70%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Contract title
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Active task
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>
                  {/* End upcoming list */}
                </ScrollView>
              </View>
            </>
          ) : (
            <>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <ScrollView
                  contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: 10,
                  }}
                  style={{ width: "100%", height: "40%" }}
                  showsVerticalScrollIndicator={false}
                >
                  {/* Completed tasks List start */}

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        November
                      </Text>
                      <Text style={{ color: infotext }}>20th 2021</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "46%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Renovation
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Finished
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "25%",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: infotext,
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Completed
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        February
                      </Text>
                      <Text style={{ color: infotext }}>1st 2022</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "46%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Field Landscaping
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Finished
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "25%",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: infotext,
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Completed
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        January
                      </Text>
                      <Text style={{ color: infotext }}>17th 2022</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "46%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        System Maintenance
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Finished
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "25%",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: infotext,
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Completed
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Month
                      </Text>
                      <Text style={{ color: infotext }}>Date</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "46%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Contract title
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Finished
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "25%",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: infotext,
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Completed
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Month
                      </Text>
                      <Text style={{ color: infotext }}>Date</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "46%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Contract title
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Finished
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "25%",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: infotext,
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Completed
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Month
                      </Text>
                      <Text style={{ color: infotext }}>Date</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "46%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Contract title
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Finished
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "25%",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: infotext,
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Completed
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      height: 60,
                      width: "90%",
                      elevation: 3,
                      backgroundColor: "#fff",
                      marginTop: 8,
                      borderRadius: 7,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 50,
                        width: 60,
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Month
                      </Text>
                      <Text style={{ color: infotext }}>Date</Text>
                    </View>
                    <View
                      style={{
                        height: 50,
                        width: 0.7,
                        backgroundColor: "#ccc",
                      }}
                    ></View>
                    <View
                      style={{
                        paddingLeft: 17,
                        height: 60,
                        width: "46%",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: infotext, fontWeight: "bold" }}>
                        Contract title
                      </Text>
                      <Text style={{ color: infotext2, fontWeight: "bold" }}>
                        Finished
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "25%",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: infotext,
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Completed
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 60,
                        width: "20%",
                        justifyContent: "center",
                      }}
                    >
                      <SimpleLineIcons
                        name="arrow-right"
                        size={24}
                        color={infotext2}
                      />
                    </View>
                  </TouchableOpacity>

                  {/* list space */}
                </ScrollView>
              </View>
              {/* End list */}
            </>
          )}
        </>
      ) : (
        <>
          <View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={{
                  height: 30,
                  width: "80%",
                  marginTop: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: bg2, fontWeight: "bold", fontSize: 18 }}>
                  Today's Activities
                </Text>
              </View>

              <View
                style={{
                  height: 60,
                  width: "90%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    height: 60,
                    flex: 1,
                    backgroundColor: "#fff",
                    elevation: 3,
                    marginRight: 10,
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                ></View>
                <View
                  style={{
                    height: 60,
                    flex: 1,
                    backgroundColor: "#fff",
                    elevation: 3,
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                ></View>
              </View>
              <View
                style={{
                  height: 60,
                  width: "90%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    height: 60,
                    flex: 1,
                    backgroundColor: "#fff",
                    elevation: 3,
                    marginRight: 10,
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                ></View>
                <View
                  style={{
                    height: 60,
                    flex: 1,
                    backgroundColor: "#fff",
                    elevation: 3,
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                ></View>
              </View>
            </View>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                height: 25,
                borderRadius: 15,
                width: "80%",
                marginTop: 20,
                backgroundColor: primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
              >
                History
              </Text>
            </View>
            <ScrollView
              Vertical={true}
              contentContainerStyle={{
                width: "100%",
                paddingBottom: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{}}
              showsVerticalScrollIndicator={false}
            >
              <TouchableOpacity
                style={{
                  height: 60,
                  width: "80%",
                  elevation: 3,
                  backgroundColor: "#fff",
                  marginTop: 8,
                  borderRadius: 7,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 50,
                    width: 60,
                  }}
                >
                  <Text style={{ color: infotext, fontWeight: "bold" }}>
                    Month
                  </Text>
                  <Text style={{ color: infotext }}>Date</Text>
                </View>
                <View
                  style={{ height: 50, width: 0.7, backgroundColor: "#ccc" }}
                ></View>
                <View
                  style={{
                    paddingLeft: 17,
                    height: 60,
                    width: "46%",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: infotext, fontWeight: "bold" }}>
                    Contract title
                  </Text>
                  <Text style={{ color: infotext2, fontWeight: "bold" }}>
                    Finished
                  </Text>
                </View>
                <View
                  style={{ height: 60, width: "25%", justifyContent: "center" }}
                >
                  <Text
                    style={{
                      color: infotext,
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Completed
                  </Text>
                </View>
                <View
                  style={{ height: 60, width: "20%", justifyContent: "center" }}
                >
                  <SimpleLineIcons
                    name="arrow-right"
                    size={24}
                    color={infotext2}
                  />
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
}
let primary = "#4940AA";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E9E8F3" },
  topnav: {
    backgroundColor: primary,
    height: 100,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  toolstxt: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});
