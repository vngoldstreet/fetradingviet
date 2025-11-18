import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-qna',
  imports: [CommonModule],
  templateUrl: './qna.component.html',
  styleUrl: './qna.component.css',
})
export class QnaComponent {
  questions = [
    {
      title: 'Robot có đảm bảo lợi nhuận không?',
      desc: 'Không ai có thể đảm bảo lợi nhuận 100% trong giao dịch tài chính. Robot giúp ổn định chiến lược, loại bỏ cảm xúc và hạn chế sai lầm do tâm lý. Tuy nhiên, thị trường luôn có rủi ro và kết quả phụ thuộc vào nhiều yếu tố như điều kiện thị trường, cài đặt tham số và quản lý vốn.',
    },
    {
      title: 'Robot có an toàn không?',
      desc: 'Robot chỉ giao dịch theo thông số đã thiết lập sẵn và không thể rút tiền hay truy cập dữ liệu cá nhân của bạn. Tất cả robot của chúng tôi đều được kiểm tra kỹ lưỡng về bảo mật. Robot chỉ có quyền thực hiện lệnh giao dịch trên tài khoản MT4/MT5 mà bạn cho phép.',
    },
    {
      title: 'Cài đặt mất bao lâu?',
      desc: 'Chỉ từ 3-5 phút theo hướng dẫn chi tiết của chúng tôi. Bạn sẽ nhận được video hướng dẫn từng bước và tài liệu PDF. Nếu gặp khó khăn, đội ngũ hỗ trợ kỹ thuật sẵn sàng trợ giúp bạn qua Telegram, Zalo hoặc phần mềm điều khiển màn hình: Ultraview, Anydesk,...',
    },
    {
      title: 'Có cần kinh nghiệm giao dịch không?',
      desc: 'Không cần quá nhiều kinh nghiệm. Robot được thiết kế với giao diện thân thiện cho cả người mới bắt đầu và trader nâng cao. Chúng tôi cung cấp cài đặt mặc định đã được tối ưu. Tuy nhiên, hiểu biết cơ bản về Forex và quản lý rủi ro sẽ giúp bạn sử dụng robot hiệu quả hơn.',
    },
    {
      title: 'Có thể chạy robot trên nhiều tài khoản không?',
      desc: 'Tùy vào gói dịch vụ bạn chọn. Gói Cơ Bản: không giới hạn số lượng tài khoản MT4/MT5 (1 robot - 1 tài khoản, bạn có thể đổi bất cứ lúc nào). Gói Nâng Cao: hỗ trợ nhiều tài khoản. Gói Chuyên Nghiệp: hỗ trợ multi-account lên đến 5 tài khoản với toàn bộ robot. Vui lòng xem chi tiết trong bảng giá.',
    },
    {
      title: 'Robot chạy được trên sàn nào?',
      desc: 'Robot hoạt động trên tất cả sàn môi giới hỗ trợ nền tảng MetaTrader 4 (MT4) hoặc MetaTrader 5 (MT5). Một số robot cũng hỗ trợ cTrader. Bạn không cần đổi sàn giao dịch, chỉ cần đảm bảo sàn của bạn sử dụng MT4/MT5.',
    },
    {
      title: 'Có hỗ trợ khi robot lỗi không?',
      desc: 'Có - đội ngũ kỹ thuật của chúng tôi hỗ trợ 24/7 qua Telegram, Zalo và Email. Gói Nâng Cao và Chuyên Nghiệp còn có hỗ trợ ưu tiên với thời gian phản hồi nhanh hơn. Chúng tôi cam kết giải quyết mọi vấn đề kỹ thuật để đảm bảo robot hoạt động ổn định.',
    },
    {
      title: 'Robot có hoạt động trên VPS không?',
      desc: 'Có, robot hoạt động tốt nhất khi chạy trên VPS (Virtual Private Server) để đảm bảo kết nối ổn định 24/7. Chúng tôi cung cấp hướng dẫn cài đặt robot trên VPS và khuyến nghị các nhà cung cấp VPS chất lượng. Bạn cũng có thể chạy robot trên máy tính cá nhân nếu giữ máy bật liên tục.',
    },
    {
      title: 'Chính sách hoàn tiền như thế nào?',
      desc: 'Chúng tôi cam kết hoàn tiền 100% trong vòng 7 ngày đầu tiên nếu bạn không hài lòng với robot (áp dụng cho lần mua đầu tiên). Bạn chỉ cần liên hệ với bộ phận hỗ trợ và chúng tôi sẽ xử lý hoàn tiền trong 5-7 ngày làm việc.',
    },
    {
      title: 'Tôi có thể tùy chỉnh chiến lược robot không?',
      desc: 'Với Gói Cơ Bản và Nâng Cao, bạn có thể điều chỉnh các tham số cơ bản như khối lượng lệnh, SL/TP, trailing stop. Gói Chuyên Nghiệp bao gồm tư vấn cá nhân hóa và có thể yêu cầu phát triển bot tùy chỉnh theo chiến lược riêng của bạn (1 bot/năm). Chúng tôi cũng cung cấp dịch vụ custom bot riêng biệt nếu cần.',
    },
  ];

  selectedIndex: number = 0;
  setActive(index: number): void {
    this.selectedIndex = index;
  }
}
