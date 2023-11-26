
export default function ToastMessage() {
    function toast({
                       title='',
                       message='',
                       type = 'info',
                       duration = 3000
                   }) {
        const main = document.getElementById('toast');
        if(main) {
            const toast = document.createElement('div');

            // Auto remove toast
            const autoRemoveId = setTimeout(function() {
                main.removeChild(toast);
            }, duration + 1000);

            // Remove toast when click
            toast.onclick = function(e) {
                if(e.target.closest('.toast__close')) {
                    main.removeChild(toast);
                    clearTimeout(autoRemoveId);
                }
            }

            const icons = {
                success: 'fa-solid fa-circle-check',
                info: 'fa-solid fa-circle-info',
                warning: 'fa-solid fa-circle-exclamation',
                error: 'fa-solid fa-xmark',
            };
            const icon = icons[type];
            const delay = (duration / 1000) .toFixed(2);

            toast.classList.add('toast', `toast--${type}`);
            toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
            toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>

                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>

                    <div class="toast__close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                `;
            main.appendChild(toast);
        }
    }

    function showSuccessToast() {
        toast({
            title: 'Thành công!',
            message: 'Bạn đã đang ký thành công',
            type: 'success',
            duration: 1500
        });
    }

    function showErrorToast() {
        toast({
            title: 'Thất bại!',
            message: 'Có lỗi xảy ra',
            type: 'error',
            duration: 1500
        });
    }

    return (
        <>
            <div id="toast"></div>

            <div>
                <button onClick={showSuccessToast} className="btn btn--success">Show success toast</button>
                <button onClick={showErrorToast} className="btn btn--danger">Show danger toast</button>
            </div>
        </>
    )
}