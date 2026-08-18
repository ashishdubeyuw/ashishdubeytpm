import { describe, it, expect } from "vitest";
import { queryAgent } from "../lib/agentEngine";

describe("Program Brief Bot (Agent Engine)", () => {
  it("responds to greetings with Program Brief Bot persona", () => {
    const res = queryAgent("hello");
    expect(res).toContain("Program Brief Bot");
    expect(res).toContain("Sentinel");
  });

  it("answers queries about NVIDIA GB10 Sentinel program", () => {
    const res = queryAgent("Tell me about the NVIDIA GB10 Sentinel project");
    expect(res).toContain("Grace Blackwell GB10");
    expect(res).toContain("146 µs");
  });

  it("answers queries about ROI and cost savings", () => {
    const res = queryAgent("What is Ashish's ROI and cost savings?");
    expect(res).toContain("$5M+");
    expect(res).toContain("0.001 defect density");
  });

  it("answers queries about TPM methodology", () => {
    const res = queryAgent("What is his TPM methodology and approach to agile?");
    expect(res).toContain("Program Planning");
    expect(res).toContain("RAID");
  });

  it("computes role alignment score for a sample JD", () => {
    const sampleJd = "We are seeking a Senior Technical Program Manager for AI and hardware programs. The ideal candidate will have experience in Python, PyTorch, embedded C, agile, scrum, milestone planning, and safety certification.";
    const res = queryAgent(`Can you assess my fit for this role: ${sampleJd}`);
    expect(res).toContain("alignment");
  });
});
