
import PDFDocument from "pdfkit"
export const pdfDownload = async (req,res) => {
        const {result} = req.body;

        if(!result){
            return res.status(400).json({error: "No content found for PDF"});
        }
        const doc = new PDFDocument({margin:50})

        res.setHeader("Content-Type","application/pdf")
        res.setHeader("Content-Disposition",'attachment; filename=="ExamNotesAI.pdf')
        doc.pipe(res);

        // Title
        doc.fontSize(20).text("ExamNotes AI", {align: "center"});
        doc.moveDown();
        doc.fontSize(14).text(`Important: ${result.importance} highest importance`);
        doc.moveDown();
        // Sub Topics
        doc.fontSize(16).text("Sub Topics");
        doc.moveDown(0.5);
        Object.entries(result.subTopics).forEach(([star,topics]) => {
            doc.moveDown(0.5);
            doc.fontSize(13).text(`${star} Topics:`);

            topics.forEach((t,i) => {
                doc.fontSize(12).text(`${i+1} -  ${t}`);
            });
        });
        doc.moveDown();

        // Notes
        doc.fontSize(16).text("Notes");
        doc.moveDown(0.5);
        doc.fontSize(12).text(result.notes.replace(/[#*]/g,""));
        doc.moveDown();

        //Revision Points
        doc.fontSize(16).text("Revision Points");
        doc.moveDown(0.5);
        result.revisionPoints.forEach((p,i) => {
            doc.fontSize(12).text(`${i+1} - ${p}`);
        });
        doc.moveDown();

        // Questions
        doc.fontSize(16).text("Important Questions");
        doc.moveDown(0.5);

        doc.fontSize(13).text("Short Questions : ");
        result.questions.short.forEach((q,i) => {
            doc.fontSize(12).text(`${i+1} - ${q}`)
        });
        doc.moveDown(0.5);
        doc.fontSize(13).text("Long Questions : ");
        result.questions.long.forEach((q,i) => {
            doc.fontSize(12).text(`${i+1} - ${q}`)
        });
        doc.moveDown(0.5);
        doc.fontSize(13).text("Diagram Question:");
        doc.fontSize(12).text(result.questions.diagram);

        doc.end();
}