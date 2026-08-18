import { knowledgeBase, STOPWORDS, KnowledgeChunk } from './agentKnowledge';

export interface AgentResponse {
  answer: string;
  source: string;
  confidence: number;
}

const GREETING_TOKENS = new Set([
  'hi', 'hello', 'hey', 'greetings', 'howdy', 'hola',
  'good morning', 'good afternoon', 'good evening', 'start',
]);

const THANKS_TOKENS = new Set([
  'thanks', 'thank you', 'thx', 'appreciate', 'great', 'awesome', 'perfect', 'cool',
]);

const FALLBACK_RESPONSES = [
  "I'm specialized in Ashish's Technical Program Leadership background — including his NVIDIA GB10 Sentinel program, 6 aerospace flight control programs (Boeing 787, eVTOL), $5M+ ROI track record, and TPM methodologies. Could you rephrase your question?",
  "I don't have that specific detail in Ashish's verified program portfolio. You can ask me about his TPM competencies, program deliverables, cost savings metrics, or contact him directly at ashishdubeyuw@gmail.com.",
  "I couldn't find a direct match. Try asking: 'Tell me about Project Sentinel', 'What programs has Ashish delivered?', 'What is his TPM methodology?', or 'How to contact him?'",
];

let fallbackIndex = 0;

const THRESHOLD_STRONG = 3.0;
const THRESHOLD_WEAK = 0.8;

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));
}

function scoreChunk(chunk: KnowledgeChunk, queryTokens: string[]): number {
  let score = 0;
  const chunkKeywords = new Set(chunk.keywords);

  for (const token of queryTokens) {
    if (chunkKeywords.has(token)) {
      score += 2.0;
    }
    for (const kw of chunk.keywords) {
      if (kw.length > 3 && token.length > 3) {
        if (kw.includes(token) || token.includes(kw)) {
          score += 1.0;
        }
      }
    }
  }

  const responseLower = chunk.response.toLowerCase();
  for (const token of queryTokens) {
    if (token.length > 3 && responseLower.includes(token)) {
      score += 0.4;
    }
  }

  return score;
}

const ASHISH_SKILLS = new Set([
  'tpm', 'program', 'management', 'roadmap', 'raid', 'okr', 'agile', 'scrum', 'leadership',
  'nvidia', 'gb10', 'blackwell', 'grace', 'nvlink', 'cuda', 'pytorch',
  'embedded', 'c', 'python', 'csharp', 'sql', 'matlab', 'simulink',
  'rtos', 'vxworks', 'deos', 'aerospace', 'avionics', 'flight', 'evtol', 'boeing', 'honeywell',
  'do178c', 'do178', 'iso26262', 'sotif', 'safety', 'certification',
  'labview', 'hil', 'automation', 'testing', 'verification', 'validation',
  'ai', 'ml', 'conformal', 'prediction', 'gru', 'rag', 'langchain', 'llamaindex',
  'six', 'sigma', 'lean', 'defect', 'density', 'roi', 'stakeholder',
]);

const TECH_VOCABULARY = new Set([
  'tpm', 'program', 'management', 'project', 'agile', 'scrum', 'kanban', 'jira', 'confluence',
  'embedded', 'c', 'python', 'csharp', 'sql', 'matlab', 'simulink',
  'javascript', 'typescript', 'java', 'kotlin', 'swift', 'go', 'rust',
  'react', 'angular', 'vue', 'node', 'fastapi', 'flask', 'django',
  'aws', 'azure', 'gcp', 'cloud', 'kubernetes', 'docker', 'devops',
  'ai', 'ml', 'pytorch', 'tensorflow', 'scikit', 'langchain', 'llamaindex', 'rag', 'llm',
  'rtos', 'vxworks', 'deos', 'firmware', 'bootloader', 'driver',
  'arm', 'nvidia', 'gb10', 'gpu', 'soc', 'fpga', 'nvlink',
  'labview', 'hil', 'arinc429', 'rs422', 'can', 'do178c', 'do254', 'iso26262',
  'aerospace', 'avionics', 'flight', 'evtol', 'safety', 'certification', 'verification', 'validation',
  'six', 'sigma', 'stakeholder', 'vendor', 'cross-functional',
]);

const ALIGNMENT_TRIGGER_PHRASES = [
  'align', 'alignment', 'how much', 'percent', 'fit', 'suitable',
  'match', 'matches', 'jd', 'job description', 'role description',
  'percentage', 'compatible', 'score', 'rate my', 'assess',
];

function detectAlignmentRequest(query: string): boolean {
  const lower = query.toLowerCase();
  return (
    query.length > 80 &&
    ALIGNMENT_TRIGGER_PHRASES.some((phrase) => lower.includes(phrase))
  );
}

function computeRoleAlignment(query: string): number {
  const lower = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
  const tokens = lower.split(/\s+/).filter((t) => t.length > 1 && !STOPWORDS.has(t));

  const uniqueJdSkills = new Set(tokens.filter((t) => TECH_VOCABULARY.has(t)));

  if (uniqueJdSkills.size === 0) return -1;

  let matched = 0;
  for (const skill of uniqueJdSkills) {
    if (ASHISH_SKILLS.has(skill)) matched++;
  }

  return Math.min(Math.round((matched / uniqueJdSkills.size) * 100), 100);
}

function buildAlignmentResponse(alignment: number, query: string): string {
  if (alignment < 30) {
    return (
      "Based on the role description, the overlap with Ashish's profile appears to be specialized.\n\n" +
      "⚠️ Better check directly — send the full JD to:\n" +
      "📧 ashishdubeyuw@gmail.com\n\n" +
      "Ashish's strongest fit is in: Technical Program Leadership, AI TPM, Hardware/Silicon TPM, Aerospace Embedded Systems (DO-178C Level A), and Test Automation ($5M+ ROI)."
    );
  }

  const level =
    alignment >= 80
      ? '🟢 Strong'
      : alignment >= 60
        ? '🟡 Good'
        : '🟠 Moderate';

  const lower = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
  const tokens = lower.split(/\s+/).filter((t) => t.length > 1 && !STOPWORDS.has(t));
  const matched = [...new Set(tokens.filter((t) => TECH_VOCABULARY.has(t) && ASHISH_SKILLS.has(t)))];

  const skillList =
    matched.length > 0
      ? matched
          .slice(0, 8)
          .map((s) => `✦ ${s}`)
          .join('\n')
      : '✦ Program leadership and cross-functional delivery';

  return (
    `${level} alignment — approximately ${alignment}% match with Ashish's TPM & engineering profile.\n\n` +
    `Matching competencies detected:\n${skillList}\n\n` +
    "To discuss how Ashish can lead your program:\n" +
    "📧 ashishdubeyuw@gmail.com\n" +
    "📞 +1 (425) 560-5118\n" +
    "💼 linkedin.com/in/ashishdubeyuw"
  );
}

export function queryAgent(query: string): string {
  const lower = query.toLowerCase().trim();
  const rawTokens = lower.split(/\s+/);

  if (rawTokens.some((t) => GREETING_TOKENS.has(t)) && query.length < 25) {
    return "Hi! 👋 I'm Ashish's Program Brief Bot. I provide structured summaries of his programs shipped (NVIDIA GB10 Sentinel, Boeing 787, eVTOL), TPM methodologies, verified $5M+ ROI metrics, and technical competencies. What would you like to explore?";
  }

  if (rawTokens.some((t) => THANKS_TOKENS.has(t)) && query.length < 35) {
    return "You're welcome! Let me know if you want details on specific programs, delivery metrics, stakeholder management, or interview availability.";
  }

  if (detectAlignmentRequest(query)) {
    const alignment = computeRoleAlignment(query);
    if (alignment === -1) {
      return (
        "I couldn't identify specific technical or program requirements in what you shared. Please paste the job description or role requirements section to calculate the alignment score."
      );
    }
    return buildAlignmentResponse(alignment, query);
  }

  const queryTokens = tokenize(query);

  if (queryTokens.length === 0) {
    return FALLBACK_RESPONSES[fallbackIndex++ % FALLBACK_RESPONSES.length];
  }

  const scored = knowledgeBase
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, queryTokens) }))
    .sort((a, b) => b.score - a.score);

  const best = scored[0];

  if (best.score >= THRESHOLD_STRONG) {
    return best.chunk.response;
  }

  if (best.score >= THRESHOLD_WEAK) {
    return best.chunk.response;
  }

  return FALLBACK_RESPONSES[fallbackIndex++ % FALLBACK_RESPONSES.length];
}
