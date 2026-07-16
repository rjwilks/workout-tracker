import { useState } from "react";

const days = [
  {
    label: "PUSH",
    tag: "Chest · Shoulders · Triceps",
    color: "#FF4D1C",
    emoji: "💪",
    exercises: [
      { name: "Chest Press Machine", sets: "4", reps: "8–10", note: "⚡ COMPOUND — main mover, goes first while freshest. Squeeze at full lockout" },
      { name: "Incline Smith Machine Press", sets: "3", reps: "8–10", note: "⚡ COMPOUND — upper chest, goes 2nd since flat/machine press is your priority lift" },
      { name: "Chest Fly (Cable or DB)", sets: "3", reps: "12–15", note: "Squeeze hard at peak contraction, go light and really feel it" },
      { name: "Overhead Press (BB or DB)", sets: "3", reps: "6–8", note: "⚡ COMPOUND — biggest shoulder mass builder" },
      { name: "Lateral Raise", sets: "3", reps: "12–15", note: "Lead with elbows, slight forward lean, no swinging" },
      { name: "Tricep Pushdown", sets: "3", reps: "10–12", note: "Elbows pinned to sides — full extension at bottom" },
      { name: "Skull Crusher", sets: "2", reps: "10–12", note: "Long head stretch — lower slowly, explode up" },
    ],
    finisher: "20–30 min incline walk · Ab circuit: cable crunches 3×15 + leg raises 3×15",
  },
  {
    label: "PULL",
    tag: "Back · Biceps · Rear Delts",
    color: "#1CB8FF",
    emoji: "🏋️",
    exercises: [
      { name: "Lat Pulldown", sets: "4", reps: "8–10", note: "⚡ COMPOUND — pull to upper chest, full arm extension at top, feel the stretch" },
      { name: "Chest Supported Row", sets: "3", reps: "8–10", note: "⚡ COMPOUND — chest pad removes lower back strain, pure lat/mid-back pull" },
      { name: "Seated Cable Row", sets: "2", reps: "10–12", note: "Drive elbows back past torso, chest tall, squeeze hard at end" },
      { name: "Reverse Cable Fly", sets: "3", reps: "12–15", note: "Rear delt + upper back — squeeze shoulder blades together at peak" },
      { name: "Preacher Curl", sets: "3", reps: "10–12", note: "No momentum — full stretch at bottom, peak squeeze at top" },
      { name: "Incline DB Curl", sets: "2", reps: "10–12", note: "Arms hang behind torso — brutal long-head bicep stretch" },
    ],
    finisher: "20–30 min incline walk · Ab circuit: cable crunches 3×15 + leg raises 3×15",
  },
  {
    label: "LEGS",
    tag: "Quads · Hamstrings · Glutes · Calves",
    color: "#00E08A",
    emoji: "🦵",
    exercises: [
      { name: "Back Squat", sets: "4", reps: "6–8", note: "⚡ COMPOUND — hit depth, brace hard. Most important leg exercise, period" },
      { name: "Romanian Deadlift (DB or BB)", sets: "3", reps: "10–12", note: "⚡ COMPOUND — push hips back, feel hamstring stretch, don't round your back" },
      { name: "Leg Press", sets: "3", reps: "10–12", note: "Feet high = glutes/hams · Feet low = quads. Don't lock knees at top" },
      { name: "Leg Curl (Seated or Lying)", sets: "3", reps: "10–12", note: "Full hamstring contraction — don't let hips rise off the pad" },
      { name: "Leg Extension", sets: "2", reps: "12–15", note: "Squeeze quads hard at top, slow controlled negative" },
      { name: "Standing Calf Raise", sets: "4", reps: "15–20", note: "Full stretch at bottom, pause and squeeze hard at top" },
    ],
    finisher: "20–30 min incline walk · Ab circuit: cable crunches 3×15 + leg raises 3×15",
  },
  {
    label: "UPPER",
    tag: "Chest · Back · Shoulders · Arms",
    color: "#C158FF",
    emoji: "🔥",
    exercises: [
      { name: "Incline Bench Press", sets: "3", reps: "8–10", note: "⚡ COMPOUND — upper chest focus, goes first while freshest on this day" },
      { name: "Seated Cable Fly", sets: "3", reps: "12–15", note: "Squeeze hard at peak contraction, constant cable tension" },
      { name: "Lat Pulldown", sets: "3", reps: "8–10", note: "⚡ COMPOUND — full stretch at top, squeeze through the lats" },
      { name: "Lateral Raise", sets: "2", reps: "12–15", note: "Lead with elbows, no swinging" },
      { name: "Chest Supported Row", sets: "2", reps: "10–12", note: "Chest pad removes lower back strain, pure lat/mid-back pull" },
      { name: "Skull Crusher", sets: "2", reps: "10–12", note: "Long head stretch — lower slowly, explode up" },
      { name: "Incline DB Curl", sets: "2", reps: "10–12", note: "Long-head bicep stretch, controlled tempo" },
    ],
    finisher: "20–30 min incline walk · Ab circuit: cable crunches 3×15 + leg raises 3×15",
  },
  {
    label: "LOWER",
    tag: "Quads · Hamstrings · Glutes · Calves",
    color: "#FFD600",
    emoji: "⚙️",
    exercises: [
      { name: "Back Squat", sets: "3", reps: "8–10", note: "⚡ COMPOUND — lighter than leg day, this is your 2nd quad-dominant session" },
      { name: "Romanian Deadlift (DB or BB)", sets: "2", reps: "10–12", note: "⚡ COMPOUND — hamstring stretch, neutral spine" },
      { name: "Leg Press", sets: "2", reps: "10–12", note: "Feet placement controls emphasis — high for glutes/hams, low for quads" },
      { name: "Leg Curl (Seated or Lying)", sets: "2", reps: "10–12", note: "Full hamstring contraction, no hip rising" },
      { name: "Standing Calf Raise", sets: "3", reps: "15–20", note: "Full stretch, pause and squeeze at top" },
    ],
    finisher: "20–30 min incline walk · Ab circuit: cable crunches 3×15 + leg raises 3×15",
  },
];

const upperLowerDays = ["UPPER", "LOWER"];

const schedule = [
  { day: "Mon", workout: "PUSH", color: "#FF4D1C" },
  { day: "Tue", workout: "PULL", color: "#1CB8FF" },
  { day: "Wed", workout: "LEGS", color: "#00E08A" },
  { day: "Thu", workout: "REST", color: "#444" },
  { day: "Fri", workout: "UPPER", color: "#C158FF" },
  { day: "Sat", workout: "LOWER", color: "#FFD600" },
  { day: "Sun", workout: "REST", color: "#444" },
];

const nutrition = {
  calories: 3000,
  protein: 175,
  carbs: 340,
  fats: 80,
  meals: [
    {
      time: "7:00 AM",
      name: "Breakfast",
      items: ["4 whole eggs + 2 whites scrambled", "2 slices sourdough toast", "1 banana", "1 glass whole milk"],
      protein: 45,
    },
    {
      time: "10:30 AM",
      name: "Mid-Morning Snack",
      items: ["1 cup Greek yogurt (plain)", "1 tbsp honey", "Handful of mixed nuts"],
      protein: 20,
    },
    {
      time: "1:00 PM",
      name: "Lunch",
      items: ["200g chicken breast or canned tuna", "1.5 cups white rice", "Broccoli + olive oil drizzle"],
      protein: 50,
    },
    {
      time: "3:30 PM",
      name: "Pre-Workout",
      items: ["Protein shake (1 scoop whey)", "1 apple or banana", "5g creatine monohydrate"],
      protein: 25,
    },
    {
      time: "6:30 PM",
      name: "Post-Workout Dinner",
      items: ["200g lean beef or salmon", "Sweet potato (medium)", "Side salad with olive oil"],
      protein: 45,
    },
    {
      time: "9:00 PM",
      name: "Night Snack",
      items: ["Cottage cheese (1 cup)", "Casein or regular protein shake (optional)"],
      protein: 30,
    },
  ],
};

const creatineInfo = [
  { phase: "Loading (Optional)", duration: "Days 1–5", dose: "20g/day", split: "4 × 5g doses", tip: "Saturates muscles faster. May cause bloating — skip if sensitive." },
  { phase: "Maintenance", duration: "Ongoing", dose: "5g/day", split: "1 dose daily", tip: "Take pre or post workout. Timing doesn't matter much — consistency does." },
  { phase: "Rest Days", duration: "Non-training", dose: "5g/day", split: "Any time", tip: "Keep taking it daily. Creatine works through saturation, not acute dosing." },
];

const tips = [
  { icon: "💧", title: "Hydration", body: "3–4L of water daily. Creatine draws water into muscle — stay ahead of it." },
  { icon: "😴", title: "Sleep", body: "8–9 hours. You're 18 — this is when GH peaks. Don't waste it scrolling." },
  { icon: "📈", title: "Progressive Overload", body: "Add weight or a rep every 1–2 weeks. Log your lifts — memory lies." },
  { icon: "🔄", title: "Getting Back In", body: "Start at ~70% of your old weights. Week 1 is about form, not ego." },
];

export default function PPLPlan() {
  const [activeDay, setActiveDay] = useState(0);
  const [tab, setTab] = useState("training");

  return (
    <div style={{
      fontFamily: "'DM Mono', 'Courier New', monospace",
      background: "#0a0a0a",
      minHeight: "100vh",
      color: "#eee",
      padding: "0",
      overflowX: "hidden",
    }}>
      {/* Header */}
      <div style={{
        padding: "32px 24px 20px",
        borderBottom: "1px solid #1f1f1f",
        background: "#0a0a0a",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: "#555", marginBottom: 6 }}>6'1 · 170 LB · 18YO · MALE</div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -1, lineHeight: 1.2 }}>
          PPL<span style={{ color: "#FF4D1C" }}>/</span>UPPER<span style={{ color: "#C158FF" }}>/</span>LOWER
        </div>
        <div style={{ fontSize: 11, color: "#444", marginTop: 4, letterSpacing: 2 }}>6-DAY HYBRID — COMEBACK PROTOCOL 2026</div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginTop: 20 }}>
          {["training", "nutrition", "creatine", "tips"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "6px 14px",
              fontSize: 10,
              letterSpacing: 2,
              textTransform: "uppercase",
              border: tab === t ? "1px solid #eee" : "1px solid #2a2a2a",
              background: tab === t ? "#eee" : "transparent",
              color: tab === t ? "#000" : "#555",
              borderRadius: 2,
              cursor: "pointer",
              transition: "all 0.15s",
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "24px 20px", maxWidth: 680, margin: "0 auto" }}>

        {/* TRAINING TAB */}
        {tab === "training" && (
          <>
            {/* Weekly Schedule */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#444", marginBottom: 12 }}>WEEKLY SCHEDULE</div>
              <div style={{ display: "flex", gap: 6 }}>
                {schedule.map((s, i) => (
                  <div key={i} style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "10px 4px",
                    background: "#111",
                    border: `1px solid ${s.workout === "REST" ? "#222" : s.color + "44"}`,
                    borderRadius: 4,
                  }}>
                    <div style={{ fontSize: 9, color: "#444", marginBottom: 4 }}>{s.day}</div>
                    <div style={{
                      fontSize: 8,
                      fontWeight: 700,
                      color: s.workout === "REST" ? "#333" : s.color,
                      letterSpacing: 1,
                    }}>{s.workout}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day Selector */}
            <div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
              {days.map((d, i) => (
                <button key={i} onClick={() => setActiveDay(i)} style={{
                  flex: "1 1 auto",
                  minWidth: 60,
                  padding: "12px 6px",
                  background: activeDay === i ? d.color : "#111",
                  border: `1px solid ${activeDay === i ? d.color : "#222"}`,
                  color: activeDay === i ? "#000" : d.color,
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: 14 }}>{d.emoji}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, marginTop: 4 }}>{d.label}</div>
                </button>
              ))}
            </div>

            {/* Exercise List */}
            {(() => {
              const d = days[activeDay];
              return (
                <div>
                  <div style={{ fontSize: 10, letterSpacing: 3, color: "#555", marginBottom: 16 }}>{d.tag}</div>
                  {d.exercises.map((ex, i) => (
                    <div key={i} style={{
                      background: "#111",
                      border: "1px solid #1a1a1a",
                      borderLeft: `3px solid ${d.color}`,
                      borderRadius: 4,
                      padding: "14px 16px",
                      marginBottom: 8,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{ex.name}</div>
                        <div style={{ fontSize: 10, color: "#555", letterSpacing: 1 }}>{ex.note}</div>
                      </div>
                      <div style={{ textAlign: "right", marginLeft: 16, flexShrink: 0 }}>
                        <div style={{ fontSize: 13, color: d.color, fontWeight: 700 }}>{ex.sets}×{ex.reps}</div>
                        <div style={{ fontSize: 9, color: "#444", letterSpacing: 1, marginTop: 2 }}>SETS×REPS</div>
                      </div>
                    </div>
                  ))}
                  <div style={{
                    marginTop: 16,
                    padding: "12px 16px",
                    background: "#0f0f0f",
                    border: "1px solid #1a1a1a",
                    borderRadius: 4,
                    fontSize: 10,
                    color: "#444",
                    lineHeight: 1.7,
                    letterSpacing: 0.5,
                  }}>
                    REST 2–3 MIN between compound sets · 60–90 SEC between isolation sets<br />
                    Warm up with 2 light sets before your first compound<br />
                    <span style={{ color: "#555" }}>FINISHER → {d.finisher}</span>
                  </div>
                </div>
              );
            })()}
          </>
        )}

        {/* NUTRITION TAB */}
        {tab === "nutrition" && (
          <>
            {/* Macro Overview */}
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#444", marginBottom: 12 }}>DAILY TARGETS — LEAN BULK</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
                {[
                  { label: "Calories", val: "~3000", unit: "kcal", color: "#FF4D1C" },
                  { label: "Protein", val: "175g", unit: "1g/lb", color: "#1CB8FF" },
                  { label: "Carbs", val: "340g", unit: "fuel", color: "#00E08A" },
                  { label: "Fats", val: "80g", unit: "health", color: "#FFD600" },
                ].map((m, i) => (
                  <div key={i} style={{
                    background: "#111",
                    border: `1px solid ${m.color}33`,
                    borderRadius: 4,
                    padding: "14px 10px",
                    textAlign: "center",
                  }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: m.color }}>{m.val}</div>
                    <div style={{ fontSize: 8, color: "#444", letterSpacing: 2, marginTop: 4 }}>{m.label}</div>
                    <div style={{ fontSize: 8, color: "#333", marginTop: 2 }}>{m.unit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Meal Plan */}
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#444", marginBottom: 12 }}>MEAL PLAN</div>
            {nutrition.meals.map((meal, i) => (
              <div key={i} style={{
                background: "#111",
                border: "1px solid #1a1a1a",
                borderRadius: 4,
                padding: "16px",
                marginBottom: 8,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <div>
                    <span style={{ fontSize: 10, color: "#555", letterSpacing: 2 }}>{meal.time} · </span>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{meal.name}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#1CB8FF", fontWeight: 700 }}>{meal.protein}g PRO</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {meal.items.map((item, j) => (
                    <div key={j} style={{ fontSize: 11, color: "#888", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "#333", fontSize: 14 }}>—</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div style={{
              marginTop: 8,
              padding: "14px 16px",
              background: "#111",
              border: "1px solid #FF4D1C33",
              borderRadius: 4,
              fontSize: 10,
              color: "#666",
              lineHeight: 1.8,
            }}>
              On rest days: drop ~200–300 kcal by reducing carbs. Keep protein the same.<br />
              Struggling to eat enough? Liquid calories (whole milk, smoothies) help.
            </div>
          </>
        )}

        {/* CREATINE TAB */}
        {tab === "creatine" && (
          <>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#444", marginBottom: 12 }}>CREATINE MONOHYDRATE PROTOCOL</div>
            <div style={{
              background: "#111",
              border: "1px solid #00E08A33",
              borderRadius: 4,
              padding: "14px 16px",
              marginBottom: 20,
              fontSize: 11,
              color: "#888",
              lineHeight: 1.8,
            }}>
              Creatine monohydrate is the most researched supplement in sports science. Proven to increase strength, power output, and muscle volume. Cheap, safe, effective — non-negotiable if you're serious.
            </div>

            {creatineInfo.map((c, i) => (
              <div key={i} style={{
                background: "#111",
                border: "1px solid #1a1a1a",
                borderLeft: "3px solid #00E08A",
                borderRadius: 4,
                padding: "16px",
                marginBottom: 10,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{c.phase}</div>
                  <div style={{ fontSize: 10, color: "#00E08A" }}>{c.dose}</div>
                </div>
                <div style={{ fontSize: 10, color: "#555", marginBottom: 8, letterSpacing: 1 }}>{c.duration} · {c.split}</div>
                <div style={{ fontSize: 11, color: "#777", lineHeight: 1.6 }}>{c.tip}</div>
              </div>
            ))}

            <div style={{
              background: "#111",
              border: "1px solid #FFD60033",
              borderRadius: 4,
              padding: "16px",
              marginTop: 8,
            }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#FFD600", marginBottom: 10 }}>BRAND RECOMMENDATIONS</div>
              {["Creapure (German-made — gold standard)", "Optimum Nutrition Micronized Creatine", "Bulk Supplements Creatine Monohydrate"].map((b, i) => (
                <div key={i} style={{ fontSize: 11, color: "#666", marginBottom: 6, display: "flex", gap: 8 }}>
                  <span style={{ color: "#FFD600" }}>→</span> {b}
                </div>
              ))}
              <div style={{ fontSize: 10, color: "#444", marginTop: 10 }}>Mix in water, juice, or protein shake. Creatine powder form only — skip capsules.</div>
            </div>
          </>
        )}

        {/* TIPS TAB */}
        {tab === "tips" && (
          <>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#444", marginBottom: 12 }}>GETTING BACK ON TRACK</div>
            {tips.map((t, i) => (
              <div key={i} style={{
                background: "#111",
                border: "1px solid #1a1a1a",
                borderRadius: 4,
                padding: "18px 16px",
                marginBottom: 10,
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}>
                <div style={{ fontSize: 24, flexShrink: 0 }}>{t.icon}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>{t.title}</div>
                  <div style={{ fontSize: 11, color: "#777", lineHeight: 1.7 }}>{t.body}</div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#444", marginBottom: 12 }}>SUPPLEMENT STACK (SIMPLE)</div>
              {[
                ["Creatine Monohydrate", "5g/day", "#00E08A"],
                ["Whey Protein (if needed)", "1–2 scoops to hit 175g protein", "#1CB8FF"],
                ["Vitamin D3", "2000–4000 IU/day", "#FFD600"],
                ["Fish Oil", "1–2g omega-3/day", "#FF4D1C"],
              ].map(([name, dose, color], i) => (
                <div key={i} style={{
                  background: "#111",
                  border: `1px solid ${color}22`,
                  borderRadius: 4,
                  padding: "12px 16px",
                  marginBottom: 6,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <div style={{ fontSize: 12 }}>{name}</div>
                  <div style={{ fontSize: 10, color: color }}>{dose}</div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 16,
              padding: "16px",
              background: "#111",
              border: "1px solid #FF4D1C33",
              borderRadius: 4,
              fontSize: 11,
              color: "#666",
              lineHeight: 1.8,
            }}>
              <span style={{ color: "#FF4D1C", fontWeight: 700 }}>Wisdom teeth recovery note: </span>
              You may have lost some muscle (a few lbs at most). It comes back faster than it came originally — your nervous system remembers. Muscle memory is real. Give it 3–4 weeks of consistent training and you'll feel close to where you were.
            </div>
          </>
        )}

      </div>
    </div>
  );
}
