export const buildPrompt = ({
    topic,
    classLevel,
    examType,
    revisionMode,
    includeDiagram,
    includeChart
}) => {
    return `
You are a STRICT JSON GENERATOR for an AI-powered exam preparation system.
If you generate invalid JSON, regenerate internally before returning.

⚠️ CRITICAL OUTPUT RULES:
- RETURN ONLY VALID JSON.
- DO NOT include explanations.
- DO NOT include markdown code blocks.
- DO NOT include text before or after JSON.
- Output must be parsable using JSON.parse().
- Use ONLY double quotes ".
- No trailing commas.
- Escape line breaks using \\n.
- Do NOT use emojis inside text values.

==================================================
TASK:
Convert the given topic into structured, detailed exam-focused notes.

INPUT:
Topic: ${topic}
Level: ${classLevel || "Not specified"}
Exam Type: ${examType || "All"}
Revision Mode: ${revisionMode ? "ON" : "OFF"}
Include Diagrams: ${includeDiagram ? "YES" : "NO"}
Include Charts: ${includeChart ? "YES" : "NO"}

==================================================
CONTENT RULES:

- Language must be simple and exam-oriented.
- Notes must be Markdown formatted.
- Use headings and bullet points only.
- No storytelling.
- No filler theory.
- No emojis.

==================================================
REVISION MODE LOGIC:

IF Revision Mode = ON:
- Notes must be VERY SHORT.
- Bullet points only.
- One-line statements only.
- Include definitions, formulas, keywords.
- No explanations.
- Must feel like a last-day quick revision sheet.
- revisionPoints must summarize ALL key facts.

IF Revision Mode = OFF:
- Notes must be very detailed and deep explaination.
- Each sub-topic must include:
  - Definition
  - Deep explanation (max 4 - 8 lines)
  - Example (real-world if applicable) deeply explained (6-8 lines long).
- Keep explanations concise.

==================================================
IMPORTANCE STRUCTURE:

Divide sub-topics into EXACTLY three categories:
- "⭐"
- "⭐⭐"
- "⭐⭐⭐"

All three categories MUST exist.
Each must contain at least one sub-topic.

The "importance" field must contain ONLY ONE of:
"⭐" OR "⭐⭐" OR "⭐⭐⭐"
(Choose the overall highest exam-weightage level.)

==================================================
DIAGRAM RULES:

IF Include Diagrams = YES:
- diagram.type must be "flowchart".
- diagram.data must be a SINGLE STRING.
- Must start with: graph TD
- Every node label must be wrapped in square brackets.
- Do NOT use special characters in labels.
- No backticks.
- Valid Mermaid syntax only.

IF Include Diagrams = NO:
- diagram.type must be "".
- diagram.data must be "".

==================================================
CHART RULES:

IF Include Charts = YES:
- charts array must contain at least ONE chart.
- Allowed chart types: "bar", "line", "pie".
- Use numeric values only.
- Labels must be short and exam-oriented.

Chart selection logic:
- Theory topic → bar or pie
- Process topic → bar or line

Chart object format:
{
  "type": "bar | line | pie",
  "title": "string",
  "data": [
    {"name": "string", "value": 10}
  ]
}

IF Include Charts = NO:
- charts must be [].

==================================================
STRICT OUTPUT FORMAT (DO NOT MODIFY):

{
  "subTopics": {
    "⭐": [],
    "⭐⭐": [],
    "⭐⭐⭐": []
  },
  "importance": "",
  "notes": "",
  "revisionPoints": [],
  "questions": {
    "short": [],
    "long": [],
    "diagram": ""
  },
  "diagram": {
    "type": "",
    "data": ""
  },
  "charts": []
}

RETURN ONLY VALID JSON.
`;
};
